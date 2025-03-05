
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <div 
        className={`
          relative max-w-xl mx-auto transition-all duration-300
          ${focused ? 'scale-105' : 'scale-100'}
        `}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search AI agents..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm 
                     focus:outline-none focus:ring-2 focus:ring-gray-200/20 focus:border-transparent 
                     transition-all placeholder:text-gray-400"
          />
        </div>
      </div>
    </form>
  );
};
