// To implement a real-time notification system using WebSockets and React, we need to follow these steps:

// Set up a WebSocket server
// Create a WebSocket client in React
// Send notifications from the server to the client
// Update the React UI in response to the received notifications


import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (data) => {
      setNotifications([...notifications, data]);
    });
  }, [notifications]);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;