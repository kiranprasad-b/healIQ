import { Activity, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import { kpiStats } from '../mockData';

const StatsGrid = () => {
  const stats = [
    {
      label: 'Total Feedback',
      value: kpiStats.totalFeedback.toLocaleString(),
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Avg Sentiment Score',
      value: kpiStats.avgSentimentScore.toFixed(1),
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Unresolved Critical Issues',
      value: kpiStats.unresolvedCriticalIssues,
      icon: AlertTriangle,
      color: kpiStats.unresolvedCriticalIssues > 0 ? 'text-red-600' : 'text-orange-600',
      bgColor: kpiStats.unresolvedCriticalIssues > 0 ? 'bg-red-50' : 'bg-orange-50',
      isCritical: true,
    },
    {
      label: 'Avg Resolution Time',
      value: `${kpiStats.avgResolutionTime.toFixed(1)} hrs`,
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p
                  className={`text-3xl font-bold ${
                    stat.isCritical && stat.value > 0 ? 'text-red-600' : 'text-gray-900'
                  }`}
                >
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
