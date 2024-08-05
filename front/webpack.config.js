const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        main: "./scripts/index.js",
        addMovie: "./scripts/controllerAddMovie.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist"),
    },
    watch: true,
};
