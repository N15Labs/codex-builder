<template>
  <section class="auth-page">
    <h1>Create Your Account ✍️</h1>
    <p class="subheading">Start building your world with Codex</p>

    <form @submit.prevent="handleRegister" class="auth-form">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit" class="cta">Register</button>
    </form>

    <button @click="handleGoogleRegister" class="cta secondary google-button">
      <img src="@/assets/google-logo.svg" alt="Google" class="icon" /> Sign up with Google
    </button>

    <p v-if="error" class="error-msg">{{ error }}</p>

    <p class="auth-switch">
      Already have an account?
      <router-link to="/login" class="switch-link">Login here</router-link>
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const error = ref('')
const { register, loginWithGoogle } = useAuth()

const handleRegister = async () => {
  try {
    await register(email.value, password.value)
    await navigateTo('/')
  } catch (err: any) {
    error.value = err.message
  }
}

const handleGoogleRegister = async () => {
  try {
    await loginWithGoogle()
    await navigateTo('/')
  } catch (err: any) {
    error.value = err.message
  }
}
</script>
<style scoped>
.auth-page {
  max-width: 480px;
  margin: 5rem auto;
  padding: 2.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.auth-page h1 {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subheading {
  font-size: 1.25rem;
  color: #444;
  margin-bottom: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.auth-form input {
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.google-button .icon {
  width: 20px;
  height: 20px;
}

.error-msg {
  margin-top: 1rem;
  color: #c0392b;
  font-weight: 600;
}

.auth-switch {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #333;
}

.switch-link {
  font-weight: bold;
  color: #407ba7;
  text-decoration: underline;
}
</style>
