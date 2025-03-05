
import { AgentCard } from "./AgentCard";
import { SearchBar } from "./SearchBar";

export const FeaturedAgents = () => {
  const featuredAgents = [
    {
      title: "Email Assistant Pro",
      description: "Automate email responses and management with advanced AI.",
      category: "Communication",
      rating: 4.8,
      price: "$29/mo"
    },
    {
      title: "Data Analyzer AI",
      description: "Transform raw data into actionable insights automatically.",
      category: "Analytics",
      rating: 4.9,
      price: "$49/mo"
    },
    {
      title: "Content Writer",
      description: "Generate high-quality content for your marketing needs.",
      category: "Marketing",
      rating: 4.7,
      price: "$39/mo"
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 mb-32">
          <SearchBar />
        </div>
        
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-gray-900">Featured Agents</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredAgents.map((agent, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
