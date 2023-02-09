const { createProxyMiddleware } = require("http-proxy-middleware");


// Proxy para poder poner imagenes/svg de ejemplo desde servidores externos
module.exports = function expressMiddleware(router) {
    router.use(
        "/show",
        createProxyMiddleware({
            target: "https://www.svgrepo.com",
            changeOrigin: true,
        }),
    )
    router.use(
        "/ios-glyphs",
        createProxyMiddleware({
            target: "https://img.icons8.com",
            changeOrigin: true,
        })
    );
    router.use(
        "/packages",
        createProxyMiddleware({
            target: "https://assets6.lottiefiles.com",
            changeOrigin: true,
        })
    );
};