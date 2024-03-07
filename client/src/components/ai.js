
import axios from "axios";
import {useEffect, useState,useRef } from "react";
// ... (Your existing imports remain unchanged)
// ... (Your existing imports remain unchanged)

import "./ai.css";

function Ai() {
  const [chat, setChat] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { type: "user-ai", content: prompt };

    axios
      .post("http://localhost:3001/chat", { prompt })
      .then((res) => {
        const bot = { type: "bot-ai", content: res.data.content };

        setChat([...chat, user, bot]);
        setPrompt("");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  // TYPING EFFECT
  const [text, setText] = useState('');
  const changingText = ['RUDU-GYM', 'HELPING 24/7'];
  const speed = 50; // typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = '';
    let typingTimeout;

    const type = () => {
      currentText = isDeleting
        ? changingText[index].substring(0, currentText.length - 1)
        : changingText[index].substring(0, currentText.length + 1);

      setText(currentText);

      const typingSpeed = isDeleting ? speed / 2 : speed;

      typingTimeout = setTimeout(() => {
        type();
      }, typingSpeed);

      if (!isDeleting && currentText === changingText[index]) {
        isDeleting = true;
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          type();
        }, 1000); // Pause before starting to delete
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % changingText.length;
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          type();
        }, 500); // Pause before starting to type the next message
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (  
    <div className="App-ai">
      <div className="navbar-ai">
        <p>{text}</p>
      </div>
      <div ref={chatContainerRef} className="chat-container-ai">
        {chat.map((message, index) => (
          <div key={index} className={`message-ai ${message.type}`}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form-ai">
        <textarea
          id="inputField"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
          className="textarea-ai"
        />
        <button className="button-ai" type="submit" disabled={loading}>
          {loading ? "Loading..." : "ANSWER"}
        </button>
      </form>
    </div>
  );
}

export default Ai;
