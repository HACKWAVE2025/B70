import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, AlertCircle, Shield, TrendingUp } from "lucide-react";

const DiseaseInfo = () => {
  const diseases = [
    {
      name: "Dengue",
      symptoms: "High fever, severe headache, pain behind eyes, joint/muscle pain, rash",
      transmission: "Transmitted by Aedes mosquitoes. Peak transmission during monsoon season.",
      prevention: "Eliminate standing water, use mosquito repellents, wear protective clothing",
      severity: "Can be fatal if not treated. Watch for warning signs like severe abdominal pain."
    },
    {
      name: "Malaria",
      symptoms: "Fever, chills, sweating, headache, nausea, muscle pain",
      transmission: "Transmitted by Anopheles mosquitoes. Common in rural and forested areas.",
      prevention: "Use bed nets, take antimalarial medication if traveling, eliminate mosquito breeding",
      severity: "Can cause severe complications affecting brain, kidneys, and blood."
    },
    {
      name: "Chikungunya",
      symptoms: "Sudden fever, severe joint pain, muscle pain, headache, rash",
      transmission: "Transmitted by Aedes mosquitoes, similar to dengue vectors.",
      prevention: "Same as dengue - mosquito control and personal protection measures",
      severity: "Usually not fatal but joint pain can persist for months."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Disease Information
        </CardTitle>
        <CardDescription>
          Learn about diseases monitored in the surveillance system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={diseases[0].name} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {diseases.map((disease) => (
              <TabsTrigger key={disease.name} value={disease.name}>
                {disease.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {diseases.map((disease) => (
            <TabsContent key={disease.name} value={disease.name} className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Symptoms</h4>
                    <p className="text-sm text-muted-foreground">{disease.symptoms}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Transmission</h4>
                    <p className="text-sm text-muted-foreground">{disease.transmission}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Prevention</h4>
                    <p className="text-sm text-muted-foreground">{disease.prevention}</p>
                  </div>
                </div>
                
                <div className="bg-muted p-3 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">Severity Warning</h4>
                  <p className="text-sm text-muted-foreground">{disease.severity}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DiseaseInfo;
