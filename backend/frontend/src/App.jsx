import { useEffect, useState } from "react";
import API from "./services/api";
import socket from "./services/socket";
import ChatBox from "./components/ChatBox";

function App() {
  const [messages, setMessages] =
    useState([]);

  const username =
    "User" +
    Math.floor(
      Math.random() * 1000
    );

  useEffect(() => {
    fetchMessages();

    socket.on(
      "receiveMessage",
      (message) => {
        setMessages((prev) => [
          ...prev,
          message
        ]);
      }
    );

    return () => {
      socket.off(
        "receiveMessage"
      );
    };
  }, []);

  const fetchMessages =
    async () => {
      try {
        const res =
          await API.get();

        setMessages(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const sendMessage =
    async (text) => {
      socket.emit(
        "sendMessage",
        {
          username,
          message: text
        }
      );
    };

  return (
    <div className="container">
      <h1>
        Real Time Chat App
      </h1>

      <ChatBox
        messages={messages}
        onSend={sendMessage}
      />
    </div>
  );
}

export default App;