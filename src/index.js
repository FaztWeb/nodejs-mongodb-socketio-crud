import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets";
import app from "./app";
import { connectDB } from "./db";

connectDB();
const server = http.createServer(app);
const httpServer = server.listen(3000);
console.log("Server on http://localhost:3000");

const io = new WebSocketServer(httpServer);

Sockets(io);
