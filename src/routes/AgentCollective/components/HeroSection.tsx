
export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto">
            The Marketplace for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              AI Agents
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Connect with top AI developers and find the perfect automation solutions for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors">
              Explore Agents
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              For Developers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
