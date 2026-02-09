import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { analyticsData } from '../mockData';
import { TrendingUp, Clock, CheckCircle, AlertTriangle, Star } from 'lucide-react';

const COLORS = ['#14b8a6', '#f87171', '#94a3b8'];

const Analytics = () => {
  const { categoryBreakdown, sourceBreakdown, resolutionMetrics, monthlyTrend } = analyticsData;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">Patient experience metrics and insights</p>
      </div>

      {/* Resolution metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Resolution Time</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {resolutionMetrics.avgResolutionTimeHours}h
              </p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved This Week</p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {resolutionMetrics.resolvedThisWeek}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Escalated</p>
              <p className="text-2xl font-bold text-orange-600 mt-1">
                {resolutionMetrics.escalatedCount}
              </p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction After Resolution</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {resolutionMetrics.satisfactionAfterResolution}/5
              </p>
            </div>
            <Star className="w-8 h-8 text-amber-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category breakdown bar chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Feedback by Category</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryBreakdown} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="positive" name="Positive" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="negative" name="Negative" fill="#f87171" radius={[4, 4, 0, 0]} />
              <Bar dataKey="neutral" name="Neutral" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Source breakdown pie chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Feedback by Source</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={sourceBreakdown}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name, percentage }) => `${name} ${percentage}%`}
              >
                {sourceBreakdown.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value, name, props) => [`${value} (${props.payload.percentage}%)`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly trend */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Feedback & Resolution Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="feedback" name="Total Feedback" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="resolved" name="Resolved %" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
