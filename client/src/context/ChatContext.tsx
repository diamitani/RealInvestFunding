import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Message, ChatStep } from "@/lib/types";
import { chatResponses } from "@/lib/chat-responses";

interface ChatContextType {
  messages: Message[];
  currentStep: ChatStep;
  sendMessage: (text: string) => void;
  isTyping: boolean;
  userInfo: {
    name: string;
    propertyAddress: string;
    loanAmount: string;
    email: string;
    phone: string;
    dealType: string;
  };
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ChatStep>("intro");
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    propertyAddress: "",
    loanAmount: "",
    email: "",
    phone: "",
    dealType: ""
  });

  // Initialize chat with welcome message on component mount
  useEffect(() => {
    const initialMessage: Message = {
      text: "Welcome to Real Invest Funding LLC! 💰 Ready to fund your next real estate deal with up to 100% financing? I'll guide you through our quick process — just a few questions, and we'll send you info or a term sheet. Ready to get started?",
      isUser: false,
      options: [
        { label: "Yes, Tell Me More", value: "yes", primary: true },
        { label: "Browse Options", value: "browse", primary: false }
      ]
    };
    setMessages([initialMessage]);
  }, []);

  // Process user input and determine response
  const processUserInput = async (text: string) => {
    let botResponse: Message = {
      text: "I'm sorry, I didn't quite understand that. How can I help you with your real estate funding needs today?",
      isUser: false,
      options: []
    };

    // Simple typing effect
    setIsTyping(true);
    
    // Wait a moment before "typing" the response
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Determine response based on current step
    if (currentStep === "intro") {
      botResponse = {
        text: "What kind of funding do you need right now?",
        isUser: false,
        options: [
          { label: "Fix & Flip", value: "fix-flip", primary: true },
          { label: "Rental Property", value: "rental", primary: true },
          { label: "Commercial", value: "commercial", primary: true },
          { label: "Ground-Up Construction", value: "construction", primary: true },
          { label: "Proof of Funds", value: "pof", primary: true },
          { label: "I'm Not Sure Yet", value: "not-sure", primary: false }
        ]
      };
      setCurrentStep("dealType");
    } 
    else if (currentStep === "dealType") {
      // Determine deal type from user message
      let dealType = "not-sure";
      
      if (text.toLowerCase().includes("fix") || text.toLowerCase().includes("flip")) {
        dealType = "fix-flip";
      } else if (text.toLowerCase().includes("rental")) {
        dealType = "rental";
      } else if (text.toLowerCase().includes("commercial")) {
        dealType = "commercial";
      } else if (text.toLowerCase().includes("construction")) {
        dealType = "construction";
      } else if (text.toLowerCase().includes("proof") || text.toLowerCase().includes("funds")) {
        dealType = "pof";
      }
      
      // Update user info
      setUserInfo(prev => ({...prev, dealType}));
      
      // Respond based on deal type
      botResponse = {
        text: chatResponses.dealType[dealType as keyof typeof chatResponses.dealType] || chatResponses.dealType["not-sure"],
        isUser: false,
        options: [
          { label: "See Loan Terms", value: "terms", primary: true },
          { label: "Start Application", value: "application", primary: true },
          { label: "Learn About CDNA Reports", value: "cdna", primary: false }
        ]
      };
      setCurrentStep("options");
    } 
    else if (currentStep === "options") {
      let option = "application";
      
      if (text.toLowerCase().includes("term")) {
        option = "terms";
      } else if (text.toLowerCase().includes("application")) {
        option = "application";
      } else if (text.toLowerCase().includes("cdna") || text.toLowerCase().includes("report")) {
        option = "cdna";
      }
      
      if (option === "application") {
        botResponse = {
          text: `Let's get your funding started. Please enter the following:

🧑 Full Name
📍 Property Address (if available)
💰 Estimated Loan Amount
📧 Your Email
📞 Phone Number

Then we'll send a term sheet or next steps within 24 hours!`,
          isUser: false,
          options: []
        };
        setCurrentStep("leadCapture");
      } else {
        botResponse = {
          text: chatResponses.nextSteps[option as keyof typeof chatResponses.nextSteps],
          isUser: false,
          options: [
            { label: "Start Application", value: "application", primary: true },
            { label: "Go Back", value: "back", primary: false }
          ]
        };
      }
    } 
    else if (currentStep === "leadCapture") {
      // Simple lead capture - in a real implementation, we would parse the information
      // For now, just acknowledge receipt and move to value-add
      
      botResponse = {
        text: `Thanks! ✅ We've received your info and will reach out within 24 business hours with your term sheet or details. Keep an eye on your inbox!

Want help making better offers? We also offer:
- 📊 CDNA Reports: $34.97 for property valuation
- 💼 Proof of Funds Letters: $19.97, nationwide*
- 🧠 Debt Stack Reports: See tax liens + second mortgages
- 🗂️ Off-Market Leads: AI-scanned, high-equity deals`,
        isUser: false,
        options: [
          { label: "CDNA", value: "cdna", primary: true },
          { label: "Proof of Funds", value: "pof", primary: true },
          { label: "Leads", value: "leads", primary: true },
          { label: "DSR", value: "dsr", primary: true },
          { label: "Nope, I'm Good", value: "done", primary: false }
        ]
      };
      setCurrentStep("valueAdd");
    } 
    else if (currentStep === "valueAdd") {
      // Handle selection of value-add services
      let service = "";
      
      if (text.toLowerCase().includes("cdna")) {
        service = "cdna";
      } else if (text.toLowerCase().includes("proof") || text.toLowerCase().includes("pof")) {
        service = "pof";
      } else if (text.toLowerCase().includes("lead")) {
        service = "leads";
      } else if (text.toLowerCase().includes("dsr") || text.toLowerCase().includes("debt")) {
        service = "dsr";
      } else {
        service = "done";
      }
      
      if (service === "pof") {
        botResponse = {
          text: `To issue a Proof of Funds Letter ($19.97), we need:
- Business Name
- Property Address
- Expected Loan Amount

Email this information to aattoh@realinvestfunding.com and we'll prepare your letter promptly.

*Not available in AZ, MN, NV, OR, SD, UT, VT`,
          isUser: false,
          options: [
            { label: "Email Now", value: "email", primary: true },
            { label: "Explore Other Services", value: "more", primary: false }
          ]
        };
      } else if (service === "cdna") {
        botResponse = {
          text: `Our CDNA (Collateral DNA) Reports provide detailed property valuation at just $34.97. Benefits include:
- Accurate ARV estimates
- Comparable sales analysis
- Local market trends
- Risk assessment scores

These reports cover 95% of U.S. properties and help you make better-informed investment decisions.

Simply email the property address to aattoh@realinvestfunding.com to order.`,
          isUser: false,
          options: [
            { label: "Order Report", value: "order", primary: true },
            { label: "Explore Other Services", value: "more", primary: false }
          ]
        };
      } else if (service === "leads") {
        botResponse = {
          text: `Our Off-Market Leads service provides AI-curated, high-equity investment opportunities with low competition. These properties are:
- Pre-screened for investment potential
- Filtered by your specific criteria
- Available nationwide
- Refreshed regularly

Purchase per lead or subscribe for regular updates. Email your location and property criteria to aattoh@realinvestfunding.com to get started.`,
          isUser: false,
          options: [
            { label: "Get Leads", value: "getleads", primary: true },
            { label: "Explore Other Services", value: "more", primary: false }
          ]
        };
      } else if (service === "dsr") {
        botResponse = {
          text: `Our Debt Stack Reports reveal:
- Existing mortgages and liens
- Tax obligations
- Second mortgages
- Other encumbrances

This vital information helps you avoid costly surprises and structure better deals. Not available in Kansas.

Email the property address to aattoh@realinvestfunding.com for pricing and details.`,
          isUser: false,
          options: [
            { label: "Request DSR", value: "requestdsr", primary: true },
            { label: "Explore Other Services", value: "more", primary: false }
          ]
        };
      } else {
        botResponse = {
          text: `Thank you for chatting with us today! 

Want to talk to a human? Email us at aattoh@realinvestfunding.com or call our office.

Remember, we offer:
- Up to 100% financing for real estate investments
- Fast approvals with no credit minimums
- Flexible terms for various property types
- Value-added services to help your business grow

We look forward to funding your next deal!`,
          isUser: false,
          options: [
            { label: "Start Over", value: "restart", primary: true }
          ]
        };
        // Reset to beginning if user wants to start over
      }
    } else {
      // Default/fallback response
      botResponse = {
        text: `I can help with funding, reports, proof of funds, leads, or referrals. Which would you like to learn more about?

Want to talk to a human? Just type "connect me" or email us at aattoh@realinvestfunding.com.`,
        isUser: false,
        options: [
          { label: "Funding Options", value: "funding", primary: true },
          { label: "Reports & Services", value: "services", primary: true },
          { label: "Start Application", value: "application", primary: true },
          { label: "Connect with Human", value: "connect", primary: false }
        ]
      };
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  // Send a message and get a response
  const sendMessage = (text: string) => {
    const userMessage: Message = {
      text,
      isUser: true,
      options: []
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Process response based on user input
    processUserInput(text);
  };

  const value = {
    messages,
    currentStep,
    sendMessage,
    isTyping,
    userInfo
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
