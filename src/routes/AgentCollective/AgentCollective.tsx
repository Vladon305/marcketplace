import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturedAgents } from "./components/FeaturedAgents";

const AgentCollective = () => {
  return (
    <div className="min-h-screen w-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedAgents />
      </main>
    </div>
  );
};

export default AgentCollective;
