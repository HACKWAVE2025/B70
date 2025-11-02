import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, TrendingUp, MapPin, Zap, Database, Cloud, BarChart3, GitBranch, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import StatsCard from "@/components/StatsCard";
import DataInputForm from "@/components/DataInputForm";
import ForecastDisplay from "@/components/ForecastDisplay";
import DiseaseInfo from "@/components/DiseaseInfo";
import DistrictMap from "@/components/DistrictMap";
import heroBanner from "@/assets/hero-banner.jpg";
import dataPattern from "@/assets/data-pattern.jpg";

const Home = () => {
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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">AI-Powered Disease Surveillance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Predict Outbreaks <span className="text-primary">Before They Spread</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced machine learning and real-time surveillance data unite to forecast disease outbreaks two weeks ahead—enabling rapid, targeted interventions that save lives.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <a href="#dashboard">
                <Button size="lg" className="text-lg px-8">
                  Explore Dashboard
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-primary">14 Days</p>
                <p className="text-sm text-muted-foreground">Forecast Window</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">Real-time</p>
                <p className="text-sm text-muted-foreground">Data Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Disease Intelligence</h2>
            <p className="text-muted-foreground text-lg">Four integrated capabilities that transform outbreak prediction and response</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Activity className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Real-Time Surveillance</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring through IoT sensors and cloud infrastructure, capturing vector, environmental, and epidemiological data streams instantly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Advanced ML Models</h3>
                <p className="text-sm text-muted-foreground">
                  Ensemble learning combining Random Forests, SVMs, and LSTM networks to predict case numbers with exceptional accuracy up to two weeks ahead.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Geospatial Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  GIS-powered mapping and visualization of evolving risk zones, identifying hotspots and transmission patterns across regions dynamically.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive dashboards deliver actionable insights to health officials, enabling targeted interventions and optimal resource allocation instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `url(${dataPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-muted-foreground text-lg">Built on proven technologies that scale from prototype to millions of users</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Data Sources</h3>
              </div>
              <div className="space-y-2">
                {["IoT Sensors", "Climate Data", "Vector Surveillance", "Case Reports"].map(item => (
                  <div key={item} className="px-4 py-2 bg-card rounded-lg border border-border">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Machine Learning</h3>
              </div>
              <div className="space-y-2">
                {["Random Forests", "Support Vector Machines", "LSTM Networks", "Ensemble Methods"].map(item => (
                  <div key={item} className="px-4 py-2 bg-card rounded-lg border border-border">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Infrastructure</h3>
              </div>
              <div className="space-y-2">
                {["Cloud Computing", "Real-time Processing", "Distributed Systems", "Edge Analytics"].map(item => (
                  <div key={item} className="px-4 py-2 bg-card rounded-lg border border-border">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Visualization</h3>
              </div>
              <div className="space-y-2">
                {["GIS Mapping", "Interactive Dashboards", "Risk Heatmaps", "Trend Analysis"].map(item => (
                  <div key={item} className="px-4 py-2 bg-card rounded-lg border border-border">
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="py-20 bg-background" id="dashboard">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Command Center</h2>
            <p className="text-muted-foreground text-lg">Real-time insights and actionable intelligence at your fingertips</p>
          </div>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Disease Response?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading health organizations using predictive intelligence to save lives and protect communities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
