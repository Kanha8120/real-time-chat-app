import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatBox({
  messages,
  onSend
}) {
  return (
    <div className="chat-box">
      <MessageList
        messages={messages}
      />

      <MessageInput
        onSend={onSend}
      />
    </div>
  );
}

export default ChatBox;