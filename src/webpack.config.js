const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "/mock-api" },
        changeOrigin: true,
      },
    },
    setupMiddlewares: (middlewares, devServer) => {
      // 필요한 미들웨어를 추가하거나 기존의 미들웨어를 수정합니다.
      // 예시: 특정 경로에 대한 요청을 가로채는 미들웨어 추가
      devServer.app.use("/api", (req, res) => {
        res.json({ message: "Hello from middleware" });
      });

      return middlewares;
    },
  },
};
