const express = require("express");
const httpProxy = require("http-proxy");
const process = require("process");

var app = express();
var apiProxy = httpProxy.createProxyServer();

const PORT = process.env.PORT || 3000;
const CDN_URL = process.env.CDN_URL || "https://stories.usestoryteller.com";
const TENANT_ID = "97a35a21-0713-3b21-1264-39fb70ea7550";

app.use(express.static("public"));

app.get("/stories/:urlName", function (req, res) {
  const urlName = req?.params?.urlName;
  const webStoryUrl = `${CDN_URL}/webstories/${TENANT_ID}/${urlName}/amp.html`;
  apiProxy.web(req, res, {
    changeOrigin: true,
    ignorePath: true,
    target: webStoryUrl,
  });
});

app.listen(PORT);
