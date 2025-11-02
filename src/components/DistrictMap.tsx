import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DistrictData {
  name: string;
  cases: number;
  riskLevel: "low" | "medium" | "high";
}

interface DistrictMapProps {
  districtData: DistrictData[];
}

const DistrictMap = ({ districtData }: DistrictMapProps) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-destructive hover:bg-destructive/90";
      case "medium":
        return "bg-warning hover:bg-warning/90";
      case "low":
        return "bg-success hover:bg-success/90";
      default:
        return "bg-muted hover:bg-muted/90";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Telangana Districts Risk Map
        </CardTitle>
        <CardDescription>
          Interactive district-level disease risk visualization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {districtData.map((district) => (
            <button
              key={district.name}
              className={`${getRiskColor(district.riskLevel)} text-white p-3 rounded-lg transition-all hover:scale-105 text-left`}
            >
              <p className="font-semibold text-sm">{district.name}</p>
              <p className="text-xs opacity-90 mt-1">{district.cases} cases</p>
              <Badge 
                variant="secondary" 
                className="mt-2 text-xs bg-white/20 hover:bg-white/30"
              >
                {district.riskLevel.toUpperCase()}
              </Badge>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-success"></div>
            <span className="text-sm text-muted-foreground">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-warning"></div>
            <span className="text-sm text-muted-foreground">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-destructive"></div>
            <span className="text-sm text-muted-foreground">High Risk</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DistrictMap;
