const { override, addBabelPlugin, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  addBabelPlugin(['import', {
    libraryName: "antd",
    style: "css"
  }])
)
