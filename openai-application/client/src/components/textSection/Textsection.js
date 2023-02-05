import React from 'react'
import './textsection.css'
import { useState } from "react";
import ChatMessage from './ChatMessage';

const Textsection = () => {

    const [input, setInput] = useState('')

    const [chatLog, setChatLog] = useState([])

    function clearChat() {
      setChatLog([]);
    }

    async function handleSubmit(e){
      e.preventDefault();
      let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
      setInput("");
      setChatLog(chatLogNew);
      const messages = chatLogNew.map((message) => message.message).join("\n");

      const response = await fetch("http://localhost:5400/text/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messages,
        }),
      });
      const data = await response.json();
      setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }]);
    }

  return (
    <div className='textsec'>
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={clearChat}>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              rows="1"
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
            ></input>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Textsection
