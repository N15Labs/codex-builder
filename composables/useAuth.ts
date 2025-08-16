import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

type User = {
  id: string
  email: string
  name?: string
  emailConfirmed?: boolean
}

type AuthResponse = {
  token: string
  user: User
}

type MaybeError = {
  data?: { message?: string }
  message?: string
}

function getErrorMessage(e: unknown, fallback: string) {
  if (typeof e === 'string') return e
  if (e && typeof e === 'object') {
    const m = (e as MaybeError).data?.message ?? (e as MaybeError).message
    if (typeof m === 'string') return m
  }
  return fallback
}

export function useAuth() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const token = useStorage<string | null>('auth:token', null)
  const user = useStorage<User | null>('auth:user', null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function login(email: string, password: string) {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await useFetch<AuthResponse>(`${apiBase}/auth/login`, {
        method: 'POST',
        body: { email, password }
      })
      if (err.value) throw err.value
      token.value = data.value?.token ?? null
      user.value = data.value?.user ?? null
      if (!token.value) throw new Error('No token returned')
      await navigateTo('/dashboard')
    } catch (e: unknown) {
      error.value = getErrorMessage(e, 'Login failed')
    } finally {
      loading.value = false
    }
  }

  async function register(payload: { name?: string; email: string; password: string }) {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await useFetch<AuthResponse>(`${apiBase}/auth/register`, {
        method: 'POST',
        body: payload
      })
      if (err.value) throw err.value
      token.value = data.value?.token ?? null
      user.value = data.value?.user ?? null
      await navigateTo('/dashboard')
    } catch (e: unknown) {
      error.value = getErrorMessage(e, 'Register failed')
    } finally {
      loading.value = false
    }
  }

  async function requestPasswordReset(email: string) {
    loading.value = true
    error.value = null
    try {
      const { error: err } = await useFetch(`${apiBase}/auth/forgot-password`, {
        method: 'POST',
        body: { email }
      })
      if (err.value) throw err.value
      return true
    } catch (e: unknown) {
      error.value = getErrorMessage(e, 'Request failed')
      return false
    } finally {
      loading.value = false
    }
  }

  async function resetPassword(tokenParam: string, newPassword: string) {
    loading.value = true
    error.value = null
    try {
      const { error: err } = await useFetch(`${apiBase}/auth/reset-password`, {
        method: 'POST',
        body: { token: tokenParam, password: newPassword }
      })
      if (err.value) throw err.value
      return true
    } catch (e: unknown) {
      error.value = getErrorMessage(e, 'Reset failed')
      return false
    } finally {
      loading.value = false
    }
  }

  async function verifyEmail(tokenParam: string) {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await useFetch<User>(`${apiBase}/auth/verify-email`, {
        method: 'POST',
        body: { token: tokenParam }
      })
      if (err.value) throw err.value
      if (user.value) user.value.emailConfirmed = true
      return data.value
    } catch (e: unknown) {
      error.value = getErrorMessage(e, 'Verification failed')
      return null
    } finally {
      loading.value = false
    }
  }

  async function fetchMe() {
    if (!token.value) return null
    const { data, error: err } = await useFetch<User>(`${apiBase}/auth/me`, {
      headers: { Authorization: `Bearer ${token.value}` }
    })
    if (!err.value && data.value) user.value = data.value
    return user.value
  }

  async function logout() {
    token.value = null
    user.value = null
    await navigateTo('/login')
  }

  return {
    token,
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    requestPasswordReset,
    resetPassword,
    verifyEmail,
    fetchMe,
    logout
  }
}
