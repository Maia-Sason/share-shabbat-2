import { useEffect, useState } from "react";
import io from "socket.io-client";

const useSockets = () => {
  const [socket, setLiveSocket] = useState(io());

  async function socketInitializer() {
    await fetch("/api/socket");
    setLiveSocket(socket);
    socket.on("connect", (response) => {
      console.log("connected", response);
    });
  }

  useEffect(() => {
    socketInitializer();
    return () => {
      socket && socket.disconnect();
      console.log("disconnected");
    };
  }, []);

  return { socket };
};

export default useSockets;
