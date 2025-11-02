import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Zap, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About OutbreakPredict</h1>
            <p className="text-xl text-muted-foreground">
              Transforming disease surveillance through AI-powered predictions and real-time data analysis
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OutbreakPredict is dedicated to preventing disease outbreaks before they escalate into public health crises. 
                By integrating cutting-edge machine learning with real-time surveillance data, we provide health officials 
                with the predictive intelligence needed to save lives and protect communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our system focuses on Telangana districts, providing localized forecasting and risk assessment to enable 
                targeted interventions where they're needed most.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Early Warning System</h3>
                <p className="text-sm text-muted-foreground">
                  Two-week advance notice enables proactive resource allocation and preventive measures before outbreaks escalate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Targeted Interventions</h3>
                <p className="text-sm text-muted-foreground">
                  Precise hotspot identification allows health officials to focus efforts and resources on highest-risk communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lives Saved</h3>
                <p className="text-sm text-muted-foreground">
                  Early detection and targeted response directly translate to reduced mortality and improved health outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">
                  85% reduction in outbreak response time through automated alerts and real-time data processing.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Data Collection</h3>
                    <p className="text-sm text-muted-foreground">
                      IoT sensors, weather stations, and healthcare facilities continuously stream surveillance data including 
                      case reports, environmental conditions, and vector populations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AI Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced ensemble machine learning models (Random Forests, SVMs, LSTM networks) process the data 
                      to identify patterns and predict outbreak trajectories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Risk Mapping</h3>
                    <p className="text-sm text-muted-foreground">
                      GIS technology visualizes predictions on interactive maps, highlighting high-risk zones and 
                      transmission corridors across Telangana districts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Action & Response</h3>
                    <p className="text-sm text-muted-foreground">
                      Health officials receive real-time alerts and actionable insights through our dashboard, enabling 
                      rapid deployment of resources and targeted interventions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">98% Prediction Accuracy</p>
                    <p className="text-sm text-muted-foreground">Industry-leading forecast precision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">14-Day Forecast Window</p>
                    <p className="text-sm text-muted-foreground">Two weeks of advance warning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Real-time Updates</p>
                    <p className="text-sm text-muted-foreground">Continuous data processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">33 Districts Covered</p>
                    <p className="text-sm text-muted-foreground">Complete Telangana coverage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
