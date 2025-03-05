import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Star, MessageSquare, Video, Check, ArrowRight } from "lucide-react";

const AgentDetails = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background px-4 py-8 md:px-8">
      {/* Hero Section */}
      <section className="section-fade mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit">
              Marketing AI Agent
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              MarketingGPT Assistant
            </h1>
            <p className="text-lg text-muted-foreground">
              Your AI-powered marketing strategist that helps create, optimize,
              and analyze marketing campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {/* Left Column - Details */}
        <div className="lg:col-span-2">
          {/* Features */}
          <section className="agent-card mb-8">
            <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
            <div className="grid gap-4">
              {[
                "Campaign strategy development",
                "Content optimization",
                "Analytics and reporting",
                "Audience targeting",
              ].map((feature) => (
                <div key={feature} className="feature-item">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews */}
          <section className="agent-card mb-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">4.8/5</span>
                <span className="text-muted-foreground">(127 reviews)</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Sarah Thompson",
                  role: "Marketing Director",
                  comment:
                    "This AI agent has transformed our marketing strategy. The insights and optimizations are invaluable.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Startup Founder",
                  comment:
                    "Incredible ROI. The campaign suggestions were spot-on for our target audience.",
                  rating: 5,
                },
              ].map((review) => (
                <Card key={review.name} className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                    <div className="flex">
                      {Array(review.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Action Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="agent-card">
              <div className="mb-6">
                <p className="mb-2 text-3xl font-bold">$49</p>
                <p className="text-muted-foreground">
                  per month, billed annually
                </p>
              </div>

              <div className="mb-6 space-y-4">
                <Button className="button-animate w-full" size="lg">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="button-animate w-full"
                  size="lg"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </Card>

            {/* Support Section */}
            <div className="mt-4 space-y-4">
              <Button
                variant="outline"
                className="button-animate w-full"
                onClick={() => setShowChat(true)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Support
              </Button>
              <Button variant="outline" className="button-animate w-full">
                <Video className="mr-2 h-4 w-4" />
                View Tutorials
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Agents */}
      <section className="container mx-auto mt-16 max-w-6xl">
        <h2 className="mb-8 text-2xl font-semibold">Related Agents</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "SalesGPT Assistant",
              description: "AI-powered sales optimization and lead generation",
              price: "$39",
            },
            {
              title: "ContentGPT Pro",
              description: "Advanced content creation and optimization",
              price: "$29",
            },
            {
              title: "AnalyticsGPT",
              description: "Data analysis and insights automation",
              price: "$59",
            },
          ].map((agent) => (
            <Card
              key={agent.title}
              className="agent-card cursor-pointer hover:border-primary"
            >
              <h3 className="mb-2 text-xl font-semibold">{agent.title}</h3>
              <p className="mb-4 text-muted-foreground">{agent.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">{agent.price}/month</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AgentDetails;
