import { Quote } from 'lucide-react';
import { overviewRecentHighlights } from '../mockData';

const OverviewHighlights = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Positive Highlights</h3>
      <div className="space-y-4">
        {overviewRecentHighlights.map((item) => (
          <div
            key={item.id}
            className="pl-4 border-l-4 border-green-500 bg-green-50/50 rounded-r-lg py-3 pr-3"
          >
            <Quote className="w-4 h-4 text-green-600 mb-1 opacity-70" />
            <p className="text-sm text-gray-800 italic">"{item.quote}"</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-medium text-gray-600">— {item.author}</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {item.department}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewHighlights;
