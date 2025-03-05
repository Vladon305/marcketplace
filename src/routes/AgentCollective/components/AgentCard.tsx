
interface AgentCardProps {
  title: string;
  description: string;
  category: string;
  rating: number;
  price: string;
}

export const AgentCard = ({ title, description, category, rating, price }: AgentCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
            {category}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-medium">{price}</span>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
