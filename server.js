const Vue = require('vue')
const express = require('express')
const fs = require('fs')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.template.html', 'utf-8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const VueServerRenderer = require('vue-server-renderer')

// 生成一个渲染器
const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
    template,
    clientManifest,
})

// 创建一个 express 实例
const server = express()
// 设置 静态文件资源路径
server.use('/dist', express.static('./dist'))

server.get('/', (req, res) => {
    console.log(1)
    renderer.renderToString({
        title: 'Vue SSR',
        meta: `
            <meta name="description" content="Vue SSR">
        `,
    }, (err, html) => {
        console.log(html, 90)
        if (err) {
            return res.status(500).end('Internal Server Error.')
        }
        res.setHeader('Content-Type', 'text/html; charset=utf8')
        res.end(html)
    })
})

// 监听端口，启动 Web 服务
server.listen(3000, () => {
    console.log('running at port 3000.')
})
