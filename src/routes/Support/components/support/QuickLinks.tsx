
import { MessageSquare, FileText, HelpCircle } from "lucide-react";

const quickLinks = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Talk to our support team",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Browse our documentation",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Common questions answered",
  },
];

export const QuickLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
      {quickLinks.map((link) => (
        <button
          key={link.title}
          className="p-6 bg-white rounded-lg shadow-sm border transition-all hover:shadow-md group"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <link.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-lg">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
