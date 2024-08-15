import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (text) => {
        const newMessage = { user: 'You', text }; // Assuming user is "You"
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="messagesMaxDiv">
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Messages;
