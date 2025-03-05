import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

const platforms = [
  {
    name: "Telegram",
    description:
      "Connect your AI agent to Telegram and interact with users directly.",
    category: "Messaging",
    image: "/placeholder.svg",
  },
  {
    name: "WhatsApp",
    description:
      "Integrate your agent with WhatsApp Business API for seamless communication.",
    category: "Messaging",
    image: "/placeholder.svg",
  },
  {
    name: "Slack",
    description:
      "Add your AI agent to Slack channels and boost team productivity.",
    category: "Collaboration",
    image: "/placeholder.svg",
  },
  {
    name: "Discord",
    description:
      "Bring your AI agent to Discord servers and engage with communities.",
    category: "Collaboration",
    image: "/placeholder.svg",
  },
  {
    name: "Zapier",
    description:
      "Connect your agent to thousands of apps through Zapier automation.",
    category: "Integration",
    image: "/placeholder.svg",
  },
  {
    name: "Salesforce",
    description:
      "Integrate AI capabilities into your Salesforce CRM workflows.",
    category: "CRM",
    image: "/placeholder.svg",
  },
];

const IntegrationPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    ...new Set(platforms.map((platform) => platform.category)),
  ];

  const filteredPlatforms = platforms.filter((platform) => {
    const matchesSearch = platform.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || platform.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">
            Integration Hub
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect your AI agent to popular platforms in minutes. Streamline
            your workflow and enhance productivity with our seamless
            integrations.
          </p>
        </header>

        <div className="relative mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12 w-full shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="whitespace-nowrap"
          >
            All Platforms
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform) => (
            <Card
              key={platform.name}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <img
                        src={platform.image}
                        alt={platform.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {platform.name}
                      </h3>
                      <Badge variant="secondary" className="mt-1">
                        {platform.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{platform.description}</p>
                <Button className="w-full">Connect</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Need Help?
            </h2>
            <p className="text-slate-600 mb-6">
              Our support team is here to assist you with any integration
              questions.
            </p>
            <Button variant="outline" className="mr-4">
              View Documentation
            </Button>
            <Button>Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;
