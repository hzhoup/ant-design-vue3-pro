/// <reference types="vite/client" />

export interface ImportMetaEnv {
    // 项目公共基础路径
    readonly VITE_BASE: string
    // 开发服务器端口
    readonly VITE_PORT: number
    // 开发代理
    readonly VITE_PROXY: [string, string][]
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
