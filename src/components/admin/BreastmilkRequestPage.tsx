import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, Bell, User, Droplets } from "lucide-react";

const BreastmilkRequestPage = () => {
  const [requestData] = useState([
    {
      id: 1,
      name: "Elena Rodriguez",
      prescription: "Doctor's prescription for premature infant",
      time: "11:30 AM",
      date: "2024-01-15",
      status: "Approved",
    },
    {
      id: 2,
      name: "Sofia Martinez",
      prescription: "Medical need for newborn nutrition",
      time: "3:15 PM",
      date: "2024-01-16", 
      status: "Rejected",
    },
    {
      id: 3,
      name: "Isabella Torres",
      prescription: "Supplemental feeding requirement",
      time: "9:45 AM",
      date: "2024-01-17",
      status: "Pending",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "Rejected":
        return <Badge className="bg-destructive text-destructive-foreground">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getActionButton = (status: string, id: number) => {
    if (status === "Approved") {
      return <Badge className="bg-success text-success-foreground">Set In</Badge>;
    }
    return null;
  };

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              BREASTMILK REQUEST
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <span className="text-sm text-foreground">Logout</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/30">
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Prescription</TableHead>
                    <TableHead className="font-semibold">Time</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requestData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="max-w-xs truncate">{item.prescription}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        {getStatusBadge(item.status)}
                      </TableCell>
                      <TableCell>
                        {getActionButton(item.status, item.id)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default BreastmilkRequestPage;