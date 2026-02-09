import { Smile } from 'lucide-react';
import { overviewNpsSummary } from '../mockData';

const OverviewNpsSummary = () => {
  const { score, promoters, passives, detractors, trend } = overviewNpsSummary;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Smile className="w-5 h-5 text-blue-500" />
        NPS Score
      </h3>
      <div className="flex items-end gap-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900">{score}</p>
          <p className="text-xs text-gray-500 mt-1">Net Promoter Score</p>
          <p className="text-sm font-medium text-green-600 mt-1">+{trend} vs last month</p>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-700 font-medium">Promoters</span>
            <span className="font-semibold text-gray-900">{promoters}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${promoters}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 font-medium">Passives</span>
            <span className="font-semibold text-gray-900">{passives}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-400 rounded-full"
              style={{ width: `${passives}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-red-700 font-medium">Detractors</span>
            <span className="font-semibold text-gray-900">{detractors}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${detractors}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewNpsSummary;
