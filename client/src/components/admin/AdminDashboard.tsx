import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Table, TableHeader, TableRow, TableHead, 
  TableBody, TableCell 
} from "@/components/ui/table";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import { formatDistance } from "date-fns";

interface Lead {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  investmentType: string;
  service: string;
  propertyAddress: string | null;
  loanAmount: string | null;
  message: string | null;
  createdAt: string;
}

export function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, logout } = useAdmin();
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/admin");
      return;
    }

    async function fetchLeads() {
      try {
        const response = await fetch("/api/leads");
        if (!response.ok) {
          throw new Error("Failed to fetch leads");
        }
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
        toast({
          title: "Error",
          description: "Failed to load leads. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, [isAuthenticated, setLocation, toast]);

  const handleLogout = () => {
    logout();
    setLocation("/admin");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lead Submissions</CardTitle>
          <CardDescription>
            View all form submissions from the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">Loading leads...</p>
          ) : leads.length === 0 ? (
            <p className="text-center py-4">No leads found</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.fullName}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell>{lead.service || lead.investmentType || "General Inquiry"}</TableCell>
                      <TableCell>
                        {lead.propertyAddress && (
                          <div><strong>Property:</strong> {lead.propertyAddress}</div>
                        )}
                        {lead.loanAmount && (
                          <div><strong>Loan Amount:</strong> {lead.loanAmount}</div>
                        )}
                        {lead.message && (
                          <div><strong>Message:</strong> {lead.message}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        {formatDistance(new Date(lead.createdAt), new Date(), { addSuffix: true })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}