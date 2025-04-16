import { useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const { login } = useAdmin();
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (login(password)) {
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      setLocation("/admin/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your password to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}