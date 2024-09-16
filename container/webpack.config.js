const HtmlWepackPlugin = require('html-webpack-plugin');
const ModulefederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 1000,
    },
    plugins: [
        new ModulefederationPlugin({
            name: "container",
            remotes: {
                barchart: "barchart@http://localhost:1001/remoteEntry.js",
                linechart: "linechart@http://localhost:1002/remoteEntry.js"
            }
        }),
        new HtmlWepackPlugin({
            template: "./public/index.html"
        })
    ]
}