import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning';
}

const MetricCard = ({ title, value, icon: Icon, trend, variant = 'default' }: MetricCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-success/20 bg-gradient-to-br from-success/5 to-success/10';
      case 'warning':
        return 'border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10';
      default:
        return 'border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-primary';
    }
  };

  return (
    <Card className={`transition-smooth hover:shadow-medium hover:-translate-y-1 ${getVariantStyles()}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium mb-2">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <p className={`text-xs mt-2 ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
                {trend.isPositive ? '↗' : '↘'} {trend.value}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-lg bg-background/50 ${getIconColor()}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;