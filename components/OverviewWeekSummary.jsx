import { TrendingUp, TrendingDown, MessageSquare, ThumbsDown, CheckCircle, ThumbsUp } from 'lucide-react';
import { overviewWeekSummary } from '../mockData';

const OverviewWeekSummary = () => {
  const { thisWeek, change } = overviewWeekSummary;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week vs Last Week</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-blue-50 border border-blue-100 p-4">
          <div className="flex items-center justify-between">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">{change.feedback}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">{thisWeek.feedback}</p>
          <p className="text-xs text-gray-600 mt-0.5">Total feedback</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-100 p-4">
          <div className="flex items-center justify-between">
            <ThumbsDown className="w-5 h-5 text-red-600" />
            <span className="text-xs font-medium text-red-700">{change.negative}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">{thisWeek.negative}</p>
          <p className="text-xs text-gray-600 mt-0.5">Negative</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-100 p-4">
          <div className="flex items-center justify-between">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-xs font-medium text-green-700">{change.resolved}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">{thisWeek.resolved}</p>
          <p className="text-xs text-gray-600 mt-0.5">Resolved</p>
        </div>
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
          <div className="flex items-center justify-between">
            <ThumbsUp className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-700">{change.positive}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">{thisWeek.positive}</p>
          <p className="text-xs text-gray-600 mt-0.5">Positive</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewWeekSummary;
