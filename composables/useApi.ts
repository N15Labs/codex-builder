import { useRuntimeConfig } from '#app'
import { useAuth } from './useAuth' 

export const useApi = () => {
  const { public: { apiBase } } = useRuntimeConfig()
  const auth = useAuth()

  const join = (base: string, path: string) =>
    (base.endsWith('/') ? base.slice(0, -1) : base) +
    (path.startsWith('/') ? path : `/${path}`)

  return async <T = any>(url: string, opts: any = {}): Promise<T> => {
    const token = auth?.token?.value
    return await $fetch<T>(join(apiBase, url), {
      ...opts,
      headers: {
        ...(opts.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    })
  }
}
