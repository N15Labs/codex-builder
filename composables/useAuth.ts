import { useStorage } from '@vueuse/core'

export function useAuth() {
  const token = useStorage('auth_token', null)
  const isAuthenticated = computed(() => !!token.value)

  const login = async (email: string, password: string) => {
    const response = await $fetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    })
    token.value = response.token
  }

  const register = async (email: string, password: string) => {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: { email, passwordHash: password },
    })
  }

  const logout = () => {
    token.value = null
  }

  return {
    token,
    isAuthenticated,
    login,
    register,
    logout,
  }
}
