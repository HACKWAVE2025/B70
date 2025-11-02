import { useState } from "react";
import Navigation from "@/components/Navigation";
import StatsCard from "@/components/StatsCard";
import DataInputForm from "@/components/DataInputForm";
import ForecastDisplay from "@/components/ForecastDisplay";
import DiseaseInfo from "@/components/DiseaseInfo";
import DistrictMap from "@/components/DistrictMap";
import { Activity, Users, AlertTriangle, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [forecasts, setForecasts] = useState<any[]>([]);
  const [districtData, setDistrictData] = useState<any[]>([
    { name: "Hyderabad", cases: 45, riskLevel: "medium" },
    { name: "Warangal Urban", cases: 12, riskLevel: "low" },
    { name: "Karimnagar", cases: 67, riskLevel: "high" },
    { name: "Nizamabad", cases: 23, riskLevel: "low" },
    { name: "Khammam", cases: 34, riskLevel: "medium" },
    { name: "Nalgonda", cases: 89, riskLevel: "high" },
    { name: "Rangareddy", cases: 56, riskLevel: "medium" },
    { name: "Medak", cases: 15, riskLevel: "low" },
    { name: "Adilabad", cases: 78, riskLevel: "high" },
    { name: "Mahbubnagar", cases: 29, riskLevel: "medium" },
    { name: "Warangal Rural", cases: 18, riskLevel: "low" },
    { name: "Sangareddy", cases: 41, riskLevel: "medium" },
  ]);

  const handleDataSubmit = (data: any) => {
    // Simulate ML prediction
    const currentCases = data.cases;
    const trend = Math.random() > 0.5 ? 1.2 : 0.8;
    const predictedCases = Math.round(currentCases * trend * (1 + Math.random() * 0.3));
    
    let riskLevel: "low" | "medium" | "high";
    if (predictedCases < 30) riskLevel = "low";
    else if (predictedCases < 60) riskLevel = "medium";
    else riskLevel = "high";

    const newForecast = {
      district: data.district,
      disease: data.disease,
      currentCases,
      predictedCases,
      riskLevel,
      confidence: 75 + Math.floor(Math.random() * 20)
    };

    setForecasts([newForecast, ...forecasts.slice(0, 4)]);

    // Update district data
    setDistrictData(prev => {
      const existing = prev.find(d => d.name === data.district);
      if (existing) {
        return prev.map(d => 
          d.name === data.district 
            ? { ...d, cases: currentCases, riskLevel } 
            : d
        );
      } else {
        return [...prev, { name: data.district, cases: currentCases, riskLevel }];
      }
    });
  };

  const totalCases = districtData.reduce((sum, d) => sum + d.cases, 0);
  const highRiskDistricts = districtData.filter(d => d.riskLevel === "high").length;
  const mediumRiskDistricts = districtData.filter(d => d.riskLevel === "medium").length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Active Cases"
            value={totalCases}
            icon={Activity}
            trend="+12% from last week"
          />
          <StatsCard
            title="Districts Monitored"
            value={districtData.length}
            icon={Users}
          />
          <StatsCard
            title="High Risk Districts"
            value={highRiskDistricts}
            icon={AlertTriangle}
            riskLevel="high"
          />
          <StatsCard
            title="Medium Risk Districts"
            value={mediumRiskDistricts}
            icon={TrendingUp}
            riskLevel="medium"
          />
        </div>

        {/* District Map */}
        <div className="mb-8">
          <DistrictMap districtData={districtData} />
        </div>

        {/* Data Input and Forecast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DataInputForm onSubmit={handleDataSubmit} />
          <ForecastDisplay forecasts={forecasts} />
        </div>

        {/* Disease Information */}
        <div className="mb-8">
          <DiseaseInfo />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
