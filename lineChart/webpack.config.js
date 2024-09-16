const HtmlWepackPlugin = require('html-webpack-plugin');
const ModulefederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 1002,
    },
    plugins: [
        new ModulefederationPlugin({
            name: "linechart",
            filename: "remoteEntry.js",
            exposes: {
                "./LinechartIndex": "./src/index"
            }
        }),
        new HtmlWepackPlugin({
            template: "./public/index.html"
        })
    ]
}