const HtmlWepackPlugin = require('html-webpack-plugin');
const ModulefederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 1001,
    },
    plugins: [
        new ModulefederationPlugin({
            name: "barchart",
            filename: "remoteEntry.js",
            exposes: {
                "./BarchartIndex": "./src/index"
            }
        }),
        new HtmlWepackPlugin({
            template: "./public/index.html"
        })
    ]
}