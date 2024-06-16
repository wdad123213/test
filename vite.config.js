import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    publicDir: 'public',
    // 网址前面要拼的东西
    base: 'test',
    // 打包相关配置
    build: {
        // 出口目录
        outDir: 'build',
        // 资源文件夹
        assetsDir: 'assets',
        // 代码映射
        sourcemap: true,
        // 把之前打包的清空
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.join(__dirname, 'index.html'),
                search: path.join(__dirname, 'search.html'),
                detail: path.join(__dirname, 'detail.html')
            },
            output: {
                chunkFileNames: 'js/[name]-[hash:8].js',
                entryFileNames: 'js/[name]-[hash:8].js',
                assetFileNames: chunkInfo => {
                    const imageReg = /(png|gif|jpeg|svg|webp)$/
                    const [, ext] = path.basename(chunkInfo.name).split('.')
                    if (ext === 'css') {
                        return `css/[name]-[hash:8].${ext}`
                    } else if (imageReg.test(ext)) {
                        return `images/[name]-[hash:8].${ext}`
                    }
                    return 'assets/[name]-[hash:8].[ext]'
                }
            }
        }
    },
    server: {
        port: 1000,
        open: true,
    }
})