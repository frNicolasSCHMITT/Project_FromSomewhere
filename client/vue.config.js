module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
};
