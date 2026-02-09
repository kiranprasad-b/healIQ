import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { sentimentTrend } from '../mockData';

const SentimentChart = () => {
  // Format dates for display (e.g., "Jan 15")
  const formattedData = sentimentTrend.map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Sentiment Trend (Last 7 Days)</h2>
        <p className="text-sm text-gray-500 mt-1">Positive vs Negative feedback over time</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f87171" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Area
            type="monotone"
            dataKey="positive"
            stroke="#14b8a6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPositive)"
            name="Positive"
          />
          <Area
            type="monotone"
            dataKey="negative"
            stroke="#f87171"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorNegative)"
            name="Negative"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;
