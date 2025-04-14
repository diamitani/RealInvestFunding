import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Message } from "@/lib/types";
import { useChatContext } from "@/context/ChatContext";

interface ChatMessageProps {
  message: Message;
  isLastMessage: boolean;
}

export function ChatMessage({ message, isLastMessage }: ChatMessageProps) {
  const { sendMessage } = useChatContext();
  const [showOptions, setShowOptions] = useState(false);

  // Only show options for bot messages with options
  useEffect(() => {
    if (!message.isUser && message.options && message.options.length > 0 && isLastMessage) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }, [message, isLastMessage]);

  const handleOptionClick = (option: { label: string; value: string }) => {
    sendMessage(option.label);
  };

  if (message.isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-primary text-white p-3 rounded-lg shadow-sm max-w-xs">
          <p>{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mb-4">
      <div className="flex-shrink-0 mr-3">
        <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white text-sm">
          RIF
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
        <p className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: message.text }}></p>
        
        {showOptions && message.options && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={
                  option.primary 
                    ? "bg-primary text-white text-sm py-1.5 px-3 rounded-md hover:bg-blue-700 transition-colors" 
                    : "bg-gray-200 text-gray-700 text-sm py-1.5 px-3 rounded-md hover:bg-gray-300 transition-colors"
                }
              >
                {option.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
