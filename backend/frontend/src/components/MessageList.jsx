function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          className="message"
          key={msg._id}
        >
          <strong>
            {msg.username}
          </strong>

          <p>{msg.message}</p>

          <small>
            {new Date(
              msg.createdAt
            ).toLocaleTimeString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default MessageList;