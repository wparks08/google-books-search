const http = require("http");
const socketIO = require("socket.io");

let httpServer;
let io;

const init = app => {
    httpServer = http.createServer(app);
    io = socketIO(httpServer);
    return {
        httpServer,
        io
    };
};

const emit = (message) => {
    if (!httpServer || !io) {
        throw new Error("socketIO was not initialized.");
    }
    io.emit("notification", message);
};

module.exports = {
    init,
    emit
};
