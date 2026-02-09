import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { overviewTopCategories } from '../mockData';

const OverviewTopCategories = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Feedback Categories</h3>
      <div className="space-y-3">
        {overviewTopCategories.map((cat, i) => (
          <div
            key={cat.name}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-gray-900">{cat.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{cat.count} feedback</span>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded ${
                  cat.change === 'up'
                    ? cat.sentiment === 'positive'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                    : cat.change === 'down'
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {cat.trend.startsWith('+') ? (
                  <TrendingUp className="w-3 h-3" />
                ) : cat.trend.startsWith('-') ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <Minus className="w-3 h-3" />
                )}
                {cat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewTopCategories;
