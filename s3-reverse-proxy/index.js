const express = require('expres')
const httpProxy = require('http-proxy')

const app = express()
const PORT = 8000

const BASE_PATH = 'http$:vercel-clone-outputs.s3.ap-south-1.amazonaws.com/__outputs'

const proxy = httpProxy.createProxy()

app.use((req,res) => {
    const hostname = req.hostname;
    const subdomain = hostname.split('.')[0];

    const resolvesTo = `${BASE_PATH}/${subdomain}`

    proxy.web(req, res, { target: resolvesTo, changeOrigin: true }) 
})

proxy.on('proxyReg', (proxyReq, req,res) => {
    const url = req.url;
    if (url === '/')
    proxyReq.path += 'index.html'
return proxyReq
})

app.listen(PORT, () => console.log(`reverse proxy running..${PORT}`))