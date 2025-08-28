import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Building2, Settings, Ticket, BarChart3, ChevronDown } from "lucide-react";

const DashboardHeader = () => {
  const navigationTabs = [
    { id: 'organizations', label: 'Organizations', icon: Building2, active: true },
    { id: 'config', label: 'System Config', icon: Settings, active: false },
    { id: 'tickets', label: 'Support Tickets', icon: Ticket, active: false },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, active: false },
  ];

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Platform Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Welcome back, admin</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
              <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">admin</div>
                <div className="text-muted-foreground text-xs">Platform Admin</div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <nav className="flex gap-2">
          {navigationTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={tab.active ? "default" : "ghost"}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-smooth ${
                  tab.active 
                    ? "bg-gradient-primary text-primary-foreground shadow-soft" 
                    : "hover:bg-muted/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;