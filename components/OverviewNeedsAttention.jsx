import { AlertTriangle, MapPin, Clock } from 'lucide-react';
import { overviewNeedsAttention } from '../mockData';

const OverviewNeedsAttention = () => {
  const getPriorityStyle = (p) => {
    if (p === 'critical') return 'bg-red-100 text-red-800 border-red-200';
    if (p === 'high') return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-amber-100 text-amber-800 border-amber-200';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-amber-500" />
        Needs Attention
      </h3>
      <div className="space-y-3">
        {overviewNeedsAttention.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-colors"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {item.age}
                </span>
              </div>
            </div>
            <span
              className={`ml-2 px-2 py-1 text-xs font-semibold rounded border capitalize flex-shrink-0 ${getPriorityStyle(
                item.priority
              )}`}
            >
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewNeedsAttention;
