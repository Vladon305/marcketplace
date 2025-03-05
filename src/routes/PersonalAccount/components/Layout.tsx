import { Sidebar } from "./Sidebar";
import { Toaster } from "./ui/toaster";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Toaster />
    </div>
  );
};
