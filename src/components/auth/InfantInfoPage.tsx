import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const InfantInfoPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    birthday: "",
    age: "",
    birthWeight: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Infant info:", formData);
  };

  const handleBack = () => {
    console.log("Go back to previous step");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">M</span>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center text-foreground mb-6">
            Infant's Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-3 gap-3">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <Input
                placeholder="Middle Name (optional)"
                value={formData.middleName}
                onChange={(e) => handleInputChange("middleName", e.target.value)}
              />
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="infant-female" />
                  <Label htmlFor="infant-female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="infant-male" />
                  <Label htmlFor="infant-male">Male</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Birthday and Age */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm text-foreground">Birthday</Label>
                <Input
                  type="date"
                  value={formData.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                />
              </div>
              <div>
                <Label className="text-sm text-foreground">Age</Label>
                <Input
                  type="number"
                  placeholder="Age (months)"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
            </div>

            {/* Birth Weight */}
            <div>
              <Label className="text-sm text-foreground">Birth Weight</Label>
              <Input
                placeholder="Birth weight (kg)"
                value={formData.birthWeight}
                onChange={(e) => handleInputChange("birthWeight", e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="secondary"
                onClick={handleBack}
                className="px-8"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-success hover:bg-success/90 text-success-foreground px-8"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default InfantInfoPage;