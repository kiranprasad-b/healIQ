import { MapPin, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
import { overviewByDepartment } from '../mockData';

const OverviewByDepartment = () => {
  const getStatusIcon = (status) => {
    if (status === 'critical') return <AlertTriangle className="w-4 h-4 text-red-600" />;
    if (status === 'warning') return <AlertCircle className="w-4 h-4 text-amber-600" />;
    return <CheckCircle className="w-4 h-4 text-green-600" />;
  };

  const getRowBg = (status) => {
    if (status === 'critical') return 'bg-red-50/50';
    if (status === 'warning') return 'bg-amber-50/50';
    return '';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">By Department</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-200">
              <th className="pb-2 font-medium">Department</th>
              <th className="pb-2 font-medium">Feedback</th>
              <th className="pb-2 font-medium">Avg Score</th>
              <th className="pb-2 font-medium">Alerts</th>
            </tr>
          </thead>
          <tbody>
            {overviewByDepartment.map((row) => (
              <tr
                key={row.department}
                className={`border-b border-gray-100 ${getRowBg(row.status)}`}
              >
                <td className="py-2.5">
                  <span className="inline-flex items-center gap-1.5 font-medium text-gray-900">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    {row.department}
                  </span>
                </td>
                <td className="py-2.5 text-gray-600">{row.feedbackCount}</td>
                <td className="py-2.5">
                  <span className="font-medium text-gray-900">{row.avgSentiment}/5</span>
                </td>
                <td className="py-2.5">
                  <span className="inline-flex items-center gap-1">
                    {getStatusIcon(row.status)}
                    {row.criticalAlerts > 0 ? (
                      <span
                        className={
                          row.status === 'critical'
                            ? 'text-red-600 font-semibold'
                            : 'text-amber-600 font-medium'
                        }
                      >
                        {row.criticalAlerts}
                      </span>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewByDepartment;
