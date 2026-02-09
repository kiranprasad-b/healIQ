import { Target, CheckCircle, XCircle } from 'lucide-react';
import { overviewResponseMetrics } from '../mockData';

const OverviewResponseMetrics = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Response & Resolution</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewResponseMetrics.map((m) => (
          <div
            key={m.label}
            className={`rounded-lg p-4 border ${
              m.status === 'below'
                ? 'bg-amber-50 border-amber-200'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <Target className="w-4 h-4 text-gray-500" />
              {m.status === 'below' ? (
                <XCircle className="w-4 h-4 text-amber-600" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-600" />
              )}
            </div>
            <p className="text-2xl font-bold text-gray-900">{m.value}</p>
            <p className="text-xs font-medium text-gray-600 mt-0.5">{m.label}</p>
            <p className="text-xs text-gray-500 mt-1">Target: {m.target}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewResponseMetrics;
