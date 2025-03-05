import { SearchBar } from "./components/support/SearchBar";
import { QuickLinks } from "./components/support/QuickLinks";
import { SupportForm } from "./components/support/SupportForm";
import { TicketStatus } from "./components/support/TicketStatus";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b animate-fade-in">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-center mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Get help with your AI agents or learn more about our platform
          </p>
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">How can we help?</h2>
          <QuickLinks />
        </section>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Support Form */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <SupportForm />
            </div>
          </section>

          {/* Ticket Status */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Your Tickets</h2>
            <div className="bg-white rounded-lg shadow-sm border">
              <TicketStatus />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Support;
