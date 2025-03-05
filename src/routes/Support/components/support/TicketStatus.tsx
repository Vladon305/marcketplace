
import { Check, Clock, ArrowRight } from "lucide-react";

const tickets = [
  {
    id: "T-1234",
    title: "Integration Issue",
    status: "Open",
    date: "2024-02-20",
  },
  {
    id: "T-1235",
    title: "API Documentation",
    status: "In Progress",
    date: "2024-02-19",
  },
  {
    id: "T-1236",
    title: "Billing Question",
    status: "Resolved",
    date: "2024-02-18",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Resolved":
      return <Check className="text-success" size={18} />;
    case "In Progress":
      return <Clock className="text-primary" size={18} />;
    default:
      return <div className="w-4 h-4 rounded-full bg-error" />;
  }
};

export const TicketStatus = () => {
  return (
    <div className="overflow-x-auto animate-fade-up">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-6 font-semibold text-gray-600">Ticket</th>
            <th className="text-left py-4 px-6 font-semibold text-gray-600">Status</th>
            <th className="text-left py-4 px-6 font-semibold text-gray-600">Date</th>
            <th className="text-right py-4 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-6">
                <div>
                  <div className="font-medium">{ticket.title}</div>
                  <div className="text-sm text-gray-500">{ticket.id}</div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  {getStatusIcon(ticket.status)}
                  <span>{ticket.status}</span>
                </div>
              </td>
              <td className="py-4 px-6">{ticket.date}</td>
              <td className="py-4 px-6 text-right">
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
