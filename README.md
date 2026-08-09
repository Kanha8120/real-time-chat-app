# Real-Time Chat Application

A full-stack Real-Time Chat Application built using Node.js, Express.js, MongoDB, Socket.IO, HTML, CSS, and JavaScript. The application enables users to communicate instantly through real-time messaging with a responsive and user-friendly interface.

## Features

- Real-time messaging using Socket.IO
- User-friendly chat interface
- MongoDB database integration
- Express.js backend server
- Instant message delivery
- Responsive design
- Environment variable configuration
- Scalable project structure

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Socket.IO

### Database
- MongoDB
- Mongoose

## Project Structure

```
real-time-chat-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── frontend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Kanha8120/real-time-chat-app.git
cd real-time-chat-app/backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/chatapp
```

### Start MongoDB

Make sure MongoDB service is running.

### Run Backend

```bash
npm start
```

Server will start at:

```
http://localhost:5000
```

### Run Frontend

Navigate to frontend directory:

```bash
cd frontend
npm install
npm start
```

or

```bash
npm run dev
```

(depending on the frontend configuration)

## Screenshots

Add screenshots of:
- Login Page
- Chat Dashboard
- Real-Time Messaging Interface

## Future Enhancements

- User Authentication
- Private Messaging
- Group Chats
- Online/Offline Status
- Typing Indicators
- File Sharing
- Message Notifications
- Emoji Support

## Author

**Krishnpal Rajput**

- GitHub: https://github.com/Kanha8120
- LinkedIn: Add Your LinkedIn Profile Link

## License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
