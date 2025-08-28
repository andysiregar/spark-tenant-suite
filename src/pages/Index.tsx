import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import RegionalStatsTable from "@/components/dashboard/RegionalStatsTable";
import { Building2, Users, HardDrive, Clock, TrendingUp } from "lucide-react";

const Index = () => {
  const metrics = [
    {
      title: "Organizations",
      value: 4,
      icon: Building2,
      trend: { value: "+12% from last month", isPositive: true }
    },
    {
      title: "Total Tenants", 
      value: 10,
      icon: Users,
      trend: { value: "+25% from last month", isPositive: true }
    },
    {
      title: "Total Users",
      value: 10,
      icon: Users,
      trend: { value: "+8% from last month", isPositive: true }
    },
    {
      title: "Disk Usage",
      value: "500 GB",
      icon: HardDrive,
      variant: 'warning' as const
    },
    {
      title: "Avg Uptime",
      value: "99.92%",
      icon: Clock,
      variant: 'success' as const,
      trend: { value: "+0.02% from last month", isPositive: true }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              variant={metric.variant}
              trend={metric.trend}
            />
          ))}
        </div>

        {/* Regional Statistics */}
        <RegionalStatsTable />
      </main>
    </div>
  );
};

export default Index;
