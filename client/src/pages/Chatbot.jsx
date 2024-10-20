import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import ClipLoader from "react-spinners/ClipLoader";
import Nav from "../components/Nav";
import getResultFromGemini from "../ai-model-gemini";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: input }]);
      setInput("");
      setLoading(true);

      try {
        const text = await getResultFromGemini(input);

        setMessages((prev) => [...prev, { type: "bot", text }]);
      } catch (error) {
        console.error("Error fetching response from AI:", error);
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Sorry, I couldn't process your request." },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSendMessage();
    }
  };

  return (
    <section className="h-[95vh] mx-auto w-[90%] flex flex-col justify-between my-6">
      <Nav />
      {/* Messages Container */}
      <div
        id="overflow"
        className="flex-grow p-4 overflow-y-scroll space-y-4 mt-[100px]"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`relative group max-w-[75%] ${
              message.type === "user"
                ? "ml-auto text-right"
                : "mr-auto text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.type === "user"
                  ? "bg-[#4A36D4] text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {/* Render Markdown for bot responses */}
              {message.type === "bot" ? (
                <ReactMarkdown>{message.text}</ReactMarkdown>
              ) : (
                message.text
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center">
            <ClipLoader size={20} color="black" />
            <p className="text-black">Loading...</p>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 flex items-center border-t border-gray-300">
        {/* Icon for input */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600">
          <FiMessageCircle size={20} />
        </div>

        {/* Input field */}
        <input
          type="text"
          className="flex-grow ml-2 p-3 text-[0.9rem] border border-gray-300 text-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        {/* Send button */}
        <button
          disabled={loading}
          type="submit"
          className="ml-2 flex items-center px-4 py-3 bg-[#4A36D4] text-white rounded-lg hover:bg-[#4831dc] transition duration-300"
          onClick={handleSendMessage}
        >
          <AiOutlineSend size={20} className="mr-1" />
          Send
        </button>
      </div>
    </section>
  );
};

export default Chatbot;
