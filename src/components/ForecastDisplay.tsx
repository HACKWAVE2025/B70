import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ForecastData {
  district: string;
  disease: string;
  currentCases: number;
  predictedCases: number;
  riskLevel: "low" | "medium" | "high";
  confidence: number;
}

interface ForecastDisplayProps {
  forecasts: ForecastData[];
}

const ForecastDisplay = ({ forecasts }: ForecastDisplayProps) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-4 w-4" />;
      case "medium":
        return <TrendingUp className="h-4 w-4" />;
      case "low":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (forecasts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>2-Week Disease Forecast</CardTitle>
          <CardDescription>Submit surveillance data to generate predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            No forecast data available. Please submit surveillance data to generate predictions.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>2-Week Disease Forecast</CardTitle>
        <CardDescription>
          AI-powered predictions based on surveillance and environmental data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {forecasts.map((forecast, index) => (
          <div
            key={index}
            className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">{forecast.district}</h4>
                <p className="text-sm text-muted-foreground">{forecast.disease}</p>
              </div>
              <Badge className={getRiskColor(forecast.riskLevel)}>
                <span className="flex items-center gap-1">
                  {getRiskIcon(forecast.riskLevel)}
                  {forecast.riskLevel.toUpperCase()} RISK
                </span>
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">{forecast.currentCases}</p>
                <p className="text-xs text-muted-foreground">Current Cases</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">{forecast.predictedCases}</p>
                <p className="text-xs text-muted-foreground">Predicted (2 weeks)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-success">{forecast.confidence}%</p>
                <p className="text-xs text-muted-foreground">Confidence</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ForecastDisplay;
