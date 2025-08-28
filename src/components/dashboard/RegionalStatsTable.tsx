import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, HardDrive, Clock } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  code: string;
  tenants: number;
  users: number;
  diskUsage: string;
  uptime: string;
  flag: string;
}

const RegionalStatsTable = () => {
  const regions: RegionData[] = [
    {
      id: 'apac',
      name: 'Asia Pacific',
      code: 'ASIA',
      tenants: 2,
      users: 2,
      diskUsage: '100 GB',
      uptime: '99.92%',
      flag: '🌏'
    },
    {
      id: 'eu',
      name: 'Europe',
      code: 'EUROPE',
      tenants: 3,
      users: 2,
      diskUsage: '150 GB',
      uptime: '99.89%',
      flag: '🇪🇺'
    },
    {
      id: 'us',
      name: 'United States',
      code: 'US',
      tenants: 5,
      users: 6,
      diskUsage: '250 GB',
      uptime: '99.95%',
      flag: '🇺🇸'
    }
  ];

  const getUptimeBadgeVariant = (uptime: string) => {
    const uptimeValue = parseFloat(uptime);
    if (uptimeValue >= 99.9) return 'default';
    if (uptimeValue >= 99.5) return 'secondary';
    return 'destructive';
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Regional Statistics</CardTitle>
        <p className="text-muted-foreground">Platform resource distribution across global regions</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">REGION</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">TENANTS</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">USERS</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">DISK USAGE</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">UPTIME</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region) => (
                <tr 
                  key={region.id} 
                  className="border-b border-border/50 hover:bg-muted/30 transition-smooth"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                        <span className="text-lg">{region.flag}</span>
                      </div>
                      <div>
                        <div className="font-medium">{region.name}</div>
                        <div className="text-sm text-muted-foreground">{region.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{region.tenants}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{region.users}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{region.diskUsage}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <Badge 
                        variant={getUptimeBadgeVariant(region.uptime)}
                        className="font-medium"
                      >
                        {region.uptime}
                      </Badge>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionalStatsTable;