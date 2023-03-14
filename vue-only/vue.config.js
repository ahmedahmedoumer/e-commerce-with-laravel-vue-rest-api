

// const { defineConfig } = require('@vue/cli-service')
// module.exports = {
//   entry: 'src/main.js'
// }

// module.exports = defineConfig({
//   transpileDependencies: true
// })
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.entry = './src/main.js';
  }
});
