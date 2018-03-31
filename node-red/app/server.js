const http = require('http');
const express = require("express");
const RED = require("node-red");
const fs = require("fs");
const {generateTestFlow} = require('./flows/generator');

const app = express();

const server = http.createServer(app);


app.get('/swagger-definition', (req, res) => {
    let filePath = require('path').resolve(__dirname, "../swagger-test.json");
    fs.readFile(filePath,function(err,data) {
        if (err) {
            res.send('<html><head></head><body>Error reading the file: <br />' + req.params.file + '</body></html>');
        } else {
            res.set('Content-Type', 'text/javascript').send(data);
        }
    });
});

const settings = {
    httpAdminRoot:"/",
    httpNodeRoot: "/api",
    userDir:"./",
    flowFile: 'flows.json',
    functionGlobalContext: {
        require:require
    }    // enables global context
};

RED.init(server,settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);

app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000);

RED.start();

// setTimeout(() => {
//     RED.nodes.addFlow(generateTestFlow());
// }, 3000);
