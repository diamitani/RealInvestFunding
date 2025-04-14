import { Home } from "@/pages/Home";
import { Toaster } from "@/components/ui/toaster";
import { ChatProvider } from "@/context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <Home />
      <Toaster />
    </ChatProvider>
  );
}

export default App;
