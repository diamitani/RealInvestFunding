import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { useChatContext } from "@/context/ChatContext";
import { LogoIcon } from "@/assets/index";

export function ChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, sendMessage, isTyping } = useChatContext();

  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Focus input when chat is opened
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat}
        className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors focus:outline-none"
        aria-label={isVisible ? "Close chat" : "Open chat"}
      >
        <i className={`fas ${isVisible ? 'fa-times' : 'fa-comment'} text-2xl`}></i>
      </Button>
      
      {/* Chat window */}
      {isVisible && (
        <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 absolute bottom-20 right-0 overflow-hidden transition-all">
          {/* Chat header */}
          <div className="bg-primary text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <LogoIcon className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="font-heading font-semibold">Real Invest Funding</h3>
                  <p className="text-xs opacity-80">Funding Expert</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close chat"
              >
                <i className="fas fa-times"></i>
              </Button>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-100">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                message={message} 
                isLastMessage={index === messages.length - 1}
              />
            ))}
            
            {isTyping && (
              <div className="flex mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white text-sm">
                    RIF
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
