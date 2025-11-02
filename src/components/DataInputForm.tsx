import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload } from "lucide-react";

const TELANGANA_DISTRICTS = [
  "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar",
  "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad",
  "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda",
  "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy",
  "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban",
  "Yadadri Bhuvanagiri"
];

const DISEASES = [
  "Dengue", "Malaria", "Chikungunya", "Typhoid", "Cholera", "COVID-19", "Influenza"
];

interface DataInputFormProps {
  onSubmit: (data: any) => void;
}

const DataInputForm = ({ onSubmit }: DataInputFormProps) => {
  const [district, setDistrict] = useState("");
  const [disease, setDisease] = useState("");
  const [cases, setCases] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [humidity, setHumidity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!district || !disease || !cases) {
      toast.error("Please fill in all required fields");
      return;
    }

    const data = {
      district,
      disease,
      cases: parseInt(cases),
      temperature: temperature ? parseFloat(temperature) : null,
      rainfall: rainfall ? parseFloat(rainfall) : null,
      humidity: humidity ? parseFloat(humidity) : null,
      timestamp: new Date().toISOString()
    };

    onSubmit(data);
    toast.success("Data submitted successfully!");
    
    // Reset form
    setCases("");
    setTemperature("");
    setRainfall("");
    setHumidity("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Submit Surveillance Data
        </CardTitle>
        <CardDescription>
          Enter disease surveillance data for Telangana districts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="district">District *</Label>
              <Select value={district} onValueChange={setDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  {TELANGANA_DISTRICTS.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disease">Disease *</Label>
              <Select value={disease} onValueChange={setDisease}>
                <SelectTrigger>
                  <SelectValue placeholder="Select disease" />
                </SelectTrigger>
                <SelectContent>
                  {DISEASES.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cases">Number of Cases *</Label>
              <Input
                id="cases"
                type="number"
                min="0"
                value={cases}
                onChange={(e) => setCases(e.target.value)}
                placeholder="Enter number of cases"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="temperature">Temperature (°C)</Label>
              <Input
                id="temperature"
                type="number"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="e.g., 32.5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rainfall">Rainfall (mm)</Label>
              <Input
                id="rainfall"
                type="number"
                step="0.1"
                value={rainfall}
                onChange={(e) => setRainfall(e.target.value)}
                placeholder="e.g., 15.2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="humidity">Humidity (%)</Label>
              <Input
                id="humidity"
                type="number"
                min="0"
                max="100"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                placeholder="e.g., 75"
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Data
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DataInputForm;
