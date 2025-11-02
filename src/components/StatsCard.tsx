import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  riskLevel?: "low" | "medium" | "high";
}

const StatsCard = ({ title, value, icon: Icon, trend, riskLevel }: StatsCardProps) => {
  const getRiskColor = () => {
    switch (riskLevel) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      case "low":
        return "text-success";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className={`text-3xl font-bold ${getRiskColor()}`}>{value}</p>
            {trend && <p className="text-xs text-muted-foreground">{trend}</p>}
          </div>
          <Icon className={`h-8 w-8 ${getRiskColor()}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
