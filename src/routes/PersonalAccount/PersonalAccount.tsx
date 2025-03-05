import { Layout } from "./components/Layout";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { Bell, ChevronRight, Star, TrendingUp } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Writing Assistant",
    description: "AI-powered writing enhancement and content generation",
    usage: 75,
    status: "Active",
  },
  {
    id: 2,
    name: "Data Analyzer",
    description: "Advanced data analysis and visualization agent",
    usage: 45,
    status: "Active",
  },
  {
    id: 3,
    name: "Customer Support",
    description: "24/7 automated customer service representative",
    usage: 90,
    status: "Active",
  },
];

const PersonalAccount = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">Hello, John!</h1>
            <p className="text-muted-foreground mt-1">
              Manage your agents, settings, and transactions in one place
            </p>
          </div>
          <Button size="icon" variant="outline" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Active Agents", value: "3", trend: "+2 this month" },
            {
              label: "Total Usage",
              value: "2,451",
              trend: "+15% vs last month",
            },
            { label: "Performance Score", value: "98%", trend: "Excellent" },
          ].map((stat, i) => (
            <Card key={i} className="p-6 card-hover">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Badge variant="secondary" className="flex gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Agents */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">My Agents</h2>
            <Button variant="ghost">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agents.map((agent) => (
              <Card key={agent.id} className="p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {agent.description}
                    </p>
                  </div>
                  <Badge
                    variant={
                      agent.status === "Active" ? "success" : "secondary"
                    }
                  >
                    {agent.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Usage</span>
                    <span className="font-medium">{agent.usage}%</span>
                  </div>
                  <Progress value={agent.usage} />
                </div>
                <div className="flex items-center gap-1 mt-4 text-muted-foreground">
                  <Star className="w-4 h-4 fill-primary stroke-primary" />
                  <span className="text-sm">4.9/5 rating</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalAccount;
