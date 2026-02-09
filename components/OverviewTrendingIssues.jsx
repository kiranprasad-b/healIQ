import { TrendingUp, Minus, TrendingDown, AlertCircle } from 'lucide-react';
import { overviewTrendingIssues } from '../mockData';

const OverviewTrendingIssues = () => {
  const trendIcon = (t) => {
    if (t === 'up') return <TrendingUp className="w-4 h-4 text-red-500" />;
    if (t === 'down') return <TrendingDown className="w-4 h-4 text-green-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Issues</h3>
      <div className="space-y-3">
        {overviewTrendingIssues.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2 min-w-0">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.issue}</p>
                <p className="text-xs text-gray-500">{item.department}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm font-semibold text-gray-700">{item.count}</span>
              {trendIcon(item.trend)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewTrendingIssues;
