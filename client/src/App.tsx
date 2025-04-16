import { Switch, Route } from "wouter";
import { Home } from "@/pages/Home";
import { AdminLoginPage } from "@/pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "@/pages/admin/AdminDashboardPage";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import { ChatProvider } from "@/context/ChatContext";
import { AdminProvider } from "@/context/AdminContext";

function App() {
  return (
    <AdminProvider>
      <ChatProvider>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/admin" component={AdminLoginPage} />
          <Route path="/admin/dashboard" component={AdminDashboardPage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </ChatProvider>
    </AdminProvider>
  );
}

export default App;
