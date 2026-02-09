import { overviewSourceBreakdown } from '../mockData';

const OverviewSourceBreakdown = () => {
  const maxCount = Math.max(...overviewSourceBreakdown.map((s) => s.count));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback by Source</h3>
      <div className="space-y-4">
        {overviewSourceBreakdown.map((s) => (
          <div key={s.source}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">{s.source}</span>
              <span className="text-gray-600">
                {s.count} ({s.percentage}%)
              </span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${s.color} rounded-full transition-all`}
                style={{ width: `${(s.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewSourceBreakdown;
