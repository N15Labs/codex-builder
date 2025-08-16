export default defineNuxtRouteMiddleware((to) => {
  const { token } = useAuth()
  const publicRoutes = new Set(['/login', '/register', '/forgot-password', '/reset-password', '/verify-email'])
  if (!token.value && !publicRoutes.has(to.path)) {
    return navigateTo('/login')
  }
})
