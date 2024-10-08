import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to AuthSystem
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure, efficient, and user-friendly authentication for your
                  applications.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
              <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                <ShieldCheck className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Secure Authentication</h2>
                <p className="text-center text-muted-foreground">
                  State-of-the-art security measures to protect user data and
                  prevent unauthorized access.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                <ShieldCheck className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">
                  Multi-factor Authentication
                </h2>
                <p className="text-center text-muted-foreground">
                  Add an extra layer of security with our robust multi-factor
                  authentication options.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                <ShieldCheck className="h-10 w-10 mb-2" />
                <h2 className="text-xl font-bold">Easy Integration</h2>
                <p className="text-center text-muted-foreground">
                  Seamlessly integrate our authentication system into your
                  existing applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
