import { useState, useEffect } from 'react';
import { Globe, Phone, ClipboardList, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { liveFeedData } from '../mockData';

const LiveFeed = () => {
  const [feedItems, setFeedItems] = useState(liveFeedData);
  const [isLive, setIsLive] = useState(true);

  const getSourceIcon = (source) => {
    switch (source) {
      case 'Google Review':
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 'Call Center':
        return <Phone className="w-4 h-4 text-green-600" />;
      case 'Survey':
        return <ClipboardList className="w-4 h-4 text-purple-600" />;
      default:
        return <Globe className="w-4 h-4 text-gray-600" />;
    }
  };

  const getSentimentBadge = (sentiment) => {
    const styles = {
      Positive: 'bg-green-100 text-green-800 border-green-200',
      Negative: 'bg-red-100 text-red-800 border-red-200',
      Neutral: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold border ${styles[sentiment] || styles.Neutral}`}
      >
        {sentiment}
      </span>
    );
  };

  const formatTimeAgo = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);

    if (diffSeconds < 60) {
      return 'Just now';
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  };

  // Simulate new items appearing (for demo purposes)
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      // Mark older items as not new after 10 minutes
      setFeedItems((prev) =>
        prev.map((item) => {
          const itemAge = Date.now() - new Date(item.timestamp).getTime();
          return {
            ...item,
            isNew: itemAge < 10 * 60 * 1000,
          };
        })
      );
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const negativeCount = feedItems.filter((item) => item.sentiment === 'Negative').length;
  const positiveCount = feedItems.filter((item) => item.sentiment === 'Positive').length;
  const newItemsCount = feedItems.filter((item) => item.isNew).length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Live Feedback Feed</h1>
            <p className="text-sm text-gray-500 mt-1">Real-time patient feedback streaming</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm font-medium text-gray-700">{isLive ? 'LIVE' : 'PAUSED'}</span>
            </div>
            <button
              onClick={() => setIsLive(!isLive)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {isLive ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">New Items</p>
                <p className="text-2xl font-bold text-blue-900 mt-1">{newItemsCount}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Positive</p>
                <p className="text-2xl font-bold text-green-900 mt-1">{positiveCount}</p>
              </div>
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold">+</span>
              </div>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Negative</p>
                <p className="text-2xl font-bold text-red-900 mt-1">{negativeCount}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Feed Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                item.isNew ? 'bg-blue-50/50' : ''
              } ${item.severity === 'High' && item.sentiment === 'Negative' ? 'border-l-4 border-red-500' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getSourceIcon(item.source)}
                    <span className="text-sm font-medium text-gray-900">{item.patientName}</span>
                    {getSentimentBadge(item.sentiment)}
                    {item.isNew && (
                      <span className="px-2 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                    {item.severity === 'High' && (
                      <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                        HIGH PRIORITY
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{item.text}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded">{item.category}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(item.timestamp)}
                    </div>
                    <span className="px-2 py-1 bg-gray-100 rounded">{item.source}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
