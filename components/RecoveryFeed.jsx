import { useState } from 'react';
import { Globe, Phone, ClipboardList, AlertCircle, Clock } from 'lucide-react';
import { recentFeedback } from '../mockData';

const RecoveryFeed = ({ onTriggerWorkflow }) => {
  const [buttonStates, setButtonStates] = useState({});

  const handleTriggerWorkflow = (feedbackId, patientName) => {
    // Immediately set to processing
    setButtonStates((prev) => ({
      ...prev,
      [feedbackId]: 'processing',
    }));

    // Generate a ticket number (using feedback ID + random number for realism)
    const ticketNumber = 400 + feedbackId;

    // After a short delay, show toast and set to assigned
    setTimeout(() => {
      if (onTriggerWorkflow) {
        onTriggerWorkflow(`Service Recovery Protocol Initiated: Ticket #${ticketNumber} Assigned`);
      }
      setButtonStates((prev) => ({
        ...prev,
        [feedbackId]: 'assigned',
      }));
    }, 500);
  };

  const getButtonContent = (feedbackId) => {
    const state = buttonStates[feedbackId];
    if (state === 'processing') {
      return 'Processing...';
    } else if (state === 'assigned') {
      return 'Assigned';
    }
    return 'Trigger Workflow';
  };

  const isButtonDisabled = (feedbackId) => {
    return buttonStates[feedbackId] === 'assigned' || buttonStates[feedbackId] === 'processing';
  };
  const getSourceIcon = (source) => {
    switch (source) {
      case 'Google Review':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Call Center':
        return <Phone className="w-5 h-5 text-green-600" />;
      case 'Survey':
        return <ClipboardList className="w-5 h-5 text-purple-600" />;
      default:
        return <Globe className="w-5 h-5 text-gray-600" />;
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
        className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[sentiment] || styles.Neutral}`}
      >
        {sentiment}
      </span>
    );
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      return 'Just now';
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else {
      return `${diffDays}d ago`;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Live Service Recovery Triggers</h2>
            <p className="text-sm text-gray-500 mt-1">Monitor and respond to patient feedback in real-time</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <AlertCircle className="w-4 h-4" />
            <span>{recentFeedback.filter((f) => f.sentiment === 'Negative').length} require attention</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Source
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Patient & Complaint
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Sentiment
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Severity
              </th>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Time
              </th>
              <th className="px-8 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentFeedback.map((feedback) => {
              const isHighSeverity = feedback.severity === 'High';
              const isNegative = feedback.sentiment === 'Negative';

              return (
                <tr
                  key={feedback.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    isHighSeverity ? 'bg-red-50 border-l-4 border-red-500' : ''
                  }`}
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {getSourceIcon(feedback.source)}
                      <span className="text-sm text-gray-600">{feedback.source}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="max-w-md">
                      <p className="text-sm font-medium text-gray-900 mb-1">{feedback.patientName}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{feedback.text}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">
                      {feedback.category}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">{getSentimentBadge(feedback.sentiment)}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs rounded-full border ${
                        feedback.severity === 'High'
                          ? 'bg-red-100 text-red-800 border-red-200 font-bold'
                          : feedback.severity === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200 font-semibold'
                          : 'bg-gray-100 text-gray-800 border-gray-200 font-medium'
                      }`}
                    >
                      {feedback.severity}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {formatTimestamp(feedback.timestamp)}
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-right">
                    {isNegative ? (
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                          Assign to Dept
                        </button>
                        <button
                          onClick={() => handleTriggerWorkflow(feedback.id, feedback.patientName)}
                          disabled={isButtonDisabled(feedback.id)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            buttonStates[feedback.id] === 'assigned'
                              ? 'text-green-700 bg-green-50 border border-green-200 cursor-not-allowed'
                              : buttonStates[feedback.id] === 'processing'
                              ? 'text-gray-600 bg-gray-100 cursor-not-allowed'
                              : 'text-white bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          {getButtonContent(feedback.id)}
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">No action needed</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecoveryFeed;
