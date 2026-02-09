import { overviewActivityByHour } from '../mockData';

const OverviewActivityByHour = () => {
  const maxCount = Math.max(...overviewActivityByHour.map((h) => h.count));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback by Time of Day</h3>
      <div className="space-y-3">
        {overviewActivityByHour.map((h) => (
          <div key={h.hour} className="flex items-center gap-3">
            <span className="w-12 text-sm font-medium text-gray-600 flex-shrink-0">{h.hour}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
              <div
                className="h-full bg-slate-600 rounded transition-all min-w-[4px]"
                style={{ width: `${(h.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 w-10 text-right">{h.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewActivityByHour;
