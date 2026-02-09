import { Inbox, Loader, CheckCircle, ArrowRight } from 'lucide-react';
import { overviewResolutionFunnel } from '../mockData';

const OverviewResolutionFunnel = () => {
  const icons = [Inbox, Loader, CheckCircle, ArrowRight];
  const maxCount = Math.max(...overviewResolutionFunnel.map((s) => s.count));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Resolution Funnel</h3>
      <div className="space-y-4">
        {overviewResolutionFunnel.map((stage, i) => {
          const Icon = icons[i];
          const width = (stage.count / maxCount) * 100;
          return (
            <div key={stage.stage}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Icon className="w-4 h-4 text-gray-500" />
                  {stage.stage}
                </span>
                <span className="text-sm font-bold text-gray-900">{stage.count}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all"
                  style={{ width: `${width}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{stage.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewResolutionFunnel;
