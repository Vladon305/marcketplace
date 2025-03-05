import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { User, Lock, MessageSquare, Mail, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">
            AI Agent Marketplace
          </h1>
          <p className="text-neutral-600">
            Access powerful AI solutions for your business
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="register-email"
                      placeholder="name@example.com"
                      type="email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                    <Input
                      id="register-password"
                      type="password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-type">Account Type</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "h-auto py-4 px-6",
                        "hover:border-primary hover:text-primary transition-colors"
                      )}
                    >
                      <div className="space-y-2">
                        <User className="h-6 w-6 mx-auto" />
                        <p className="text-sm font-medium">Business</p>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "h-auto py-4 px-6",
                        "hover:border-primary hover:text-primary transition-colors"
                      )}
                    >
                      <div className="space-y-2">
                        <Github className="h-6 w-6 mx-auto" />
                        <p className="text-sm font-medium">Developer</p>
                      </div>
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-neutral-600">
            <MessageSquare className="h-5 w-5" />
            <span>Need help? Contact support</span>
          </div>
          <p className="text-sm text-neutral-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
