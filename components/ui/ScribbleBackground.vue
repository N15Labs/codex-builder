<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D | null
let animationFrame: number

type Point = { x: number; y: number }

let path: Point[] = []
let drawProgress = 0
const drawSpeed = 0.3 
let currentIndex = 0

// CONFIG
const LINE_HEIGHT = 48
const WORD_SPACING = 18
const CHAR_WIDTH = 16
const PARAGRAPH_GAP = 60
const WOBBLE_AMPLITUDE = 4
const WOBBLE_FREQUENCY = 0.12
const STROKE_WIDTH = 7

function generateWritingPath(width: number, height: number): Point[] {
  const maxCharsPerLine = Math.floor(width / CHAR_WIDTH)
  const maxLines = Math.floor(height / LINE_HEIGHT)
  const totalChars = maxCharsPerLine * maxLines

  const path: Point[] = []
  let x = 0
  let y = LINE_HEIGHT
  let lineCount = 0

  for (let i = 0; i < totalChars; i++) {
    const dx = CHAR_WIDTH + Math.random() * 2
    const dy = Math.sin(i * WOBBLE_FREQUENCY) * WOBBLE_AMPLITUDE

    path.push({ x, y: y + dy })
    x += dx

    if (Math.random() < 0.07) {
      x += WORD_SPACING * 5
    }

    if (x >= width - CHAR_WIDTH) {
      x = 0
      y += LINE_HEIGHT
      lineCount++

      if (lineCount % 4 === 0) {
        y += PARAGRAPH_GAP
      }
    }

    if (y > height - LINE_HEIGHT) break
  }

  return path
}

function draw() {
  if (!ctx || !canvas) return
  const w = (canvas.width = window.innerWidth)
  const h = (canvas.height = window.innerHeight)

  ctx.clearRect(0, 0, w, h)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)'
  ctx.lineWidth = STROKE_WIDTH
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'

  ctx.beginPath()
  for (let i = 1; i < currentIndex; i++) {
    const prev = path[i - 1]
    const curr = path[i]
    ctx.moveTo(prev.x, prev.y)
    ctx.lineTo(curr.x, curr.y)
  }
  ctx.stroke()

  drawProgress += drawSpeed
  currentIndex = Math.floor(drawProgress)

  if (currentIndex >= path.length) {
    path = generateWritingPath(w, h)
    currentIndex = 0
    drawProgress = 0
  }
}

function animate() {
  draw()
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  canvas = document.getElementById('scribble-canvas') as HTMLCanvasElement
  ctx = canvas?.getContext('2d')

  if (ctx && canvas) {
    path = generateWritingPath(window.innerWidth, window.innerHeight)
    currentIndex = 0
    drawProgress = 0
    animate()
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationFrame)
    path = generateWritingPath(window.innerWidth, window.innerHeight)
    currentIndex = 0
    drawProgress = 0
    animate()
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <canvas id="scribble-canvas" class="fixed inset-0 z-0 pointer-events-none" />
</template>

<style scoped>
canvas {
  opacity: 0.35;
  filter: blur(0.3px) contrast(1.1);
}
</style>
