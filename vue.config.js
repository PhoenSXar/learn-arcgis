const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
	// lintOnSave: false,
  configureWebpack: {
    plugins: [
      new ArcGISPlugin()
    ]
  }
}