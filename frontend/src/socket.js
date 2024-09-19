import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket = null;

export const getSocket = () => {
    if (socket === null) {
        socket = io("http://localhost:8000");
        console.log("Socket As Been Connected");
    }
    return socket;
};

export const disConnectSocket = () => {
    if (socket) {
        socket.disconnect();
        console.log("Socket As Been DisConnected");
    }
};