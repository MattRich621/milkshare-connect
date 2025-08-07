import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-2xl">M</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Breastmilk Connect
          </h1>
          <p className="text-muted-foreground mb-6">
            Connecting donors and recipients for healthier babies
          </p>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/login">Login</Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full">
              <Link to="/create-account">Create Account</Link>
            </Button>

            <Button asChild variant="secondary" className="w-full">
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
