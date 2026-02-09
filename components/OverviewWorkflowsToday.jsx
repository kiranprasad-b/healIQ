import { Zap, Building2, Clock } from 'lucide-react';
import { overviewWorkflowsToday } from '../mockData';

const OverviewWorkflowsToday = () => {
  const getStatusStyle = (s) => {
    if (s === 'resolved') return 'bg-green-100 text-green-800';
    if (s === 'in progress') return 'bg-blue-100 text-blue-800';
    return 'bg-amber-100 text-amber-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-amber-500" />
        Workflows Today
      </h3>
      <div className="space-y-3">
        {overviewWorkflowsToday.map((w) => (
          <div
            key={w.id}
            className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-gray-50 border border-gray-100"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-gray-800">{w.ticket}</span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <Building2 className="w-3 h-3" />
                {w.department}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {w.time}
              </span>
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded capitalize ${getStatusStyle(
                  w.status
                )}`}
              >
                {w.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewWorkflowsToday;
