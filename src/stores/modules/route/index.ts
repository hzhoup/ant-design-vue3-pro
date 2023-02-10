export const useRouteStore = defineStore(
  'route-store',
  () => {
    const cache = ref<string[]>([])

    return { cache }
  },
  {
    persist: {
      storage: window.sessionStorage
    }
  }
)
