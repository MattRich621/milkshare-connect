import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, Bell, User, FileText } from "lucide-react";

const HealthScreeningPage = () => {
  const [screeningData] = useState([
    {
      id: 1,
      name: "Maria Santos",
      time: "10:00 AM",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: 2,
      name: "Ana Garcia",
      time: "2:30 PM", 
      date: "2024-01-16",
      status: "Completed",
    },
    {
      id: 3,
      name: "Carmen Dela Cruz",
      time: "9:15 AM",
      date: "2024-01-17",
      status: "Pending",
    },
  ]);

  const getStatusBadge = (status: string) => {
    if (status === "Completed") {
      return <Badge className="bg-success text-success-foreground">View</Badge>;
    }
    return <Badge variant="secondary">{status}</Badge>;
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
              <FileText className="w-5 h-5" />
              HEALTH SCREENING REPORTS
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
                    <TableHead className="font-semibold">Time</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {screeningData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        {getStatusBadge(item.status)}
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

export default HealthScreeningPage;