
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full px-4 py-3 pl-12 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
};
