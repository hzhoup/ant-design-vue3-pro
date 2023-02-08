import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]
type ProxyArr = ProxyItem[]

type ProxyTarget = Record<string, ProxyOptions>

export function createProxy(list: ProxyArr = []) {
    const result: ProxyTarget = {}
    for (const [prefix, target] of list) {
        result[prefix] = {
            target,
            changeOrigin: true,
            ws: true,
            rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '')
        }
    }
    return result
}