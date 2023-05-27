const NodeMediaServer = require("node-media-server");
const express = require("express");
const config = require("./config/config");

const nms = new NodeMediaServer(config);

nms.run();

console.log("Streaming server is running");

const app = express();
app.use(express.static("./hls")); // Replace with the path to your HLS directory

// Start the Express server
app.listen(8080, () => {
    console.log("HTTP server is running");
});
