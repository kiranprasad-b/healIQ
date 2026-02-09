import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import SentimentChart from './components/SentimentChart';
import RecoveryFeed from './components/RecoveryFeed';
import FacilityHeatmap from './components/FacilityHeatmap';
import LiveFeed from './components/LiveFeed';
import OverviewResponseMetrics from './components/OverviewResponseMetrics';
import OverviewTopCategories from './components/OverviewTopCategories';
import OverviewByDepartment from './components/OverviewByDepartment';
import OverviewHighlights from './components/OverviewHighlights';
import OverviewTrendingIssues from './components/OverviewTrendingIssues';
import OverviewNeedsAttention from './components/OverviewNeedsAttention';
import OverviewSourceBreakdown from './components/OverviewSourceBreakdown';
import OverviewWeekSummary from './components/OverviewWeekSummary';
import OverviewResolutionFunnel from './components/OverviewResolutionFunnel';
import OverviewActivityByHour from './components/OverviewActivityByHour';
import OverviewWorkflowsToday from './components/OverviewWorkflowsToday';
import OverviewNpsSummary from './components/OverviewNpsSummary';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Toast from './components/Toast';
import Landing from './components/Landing';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  const [showLanding, setShowLanding] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('overview');
  const [showChat, setShowChat] = useState(false);

  const handleTriggerWorkflow = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'livefeed':
        return <LiveFeed />;
      case 'recovery':
        return <RecoveryFeed onTriggerWorkflow={handleTriggerWorkflow} />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'overview':
      default:
        return (
          <>
            <StatsGrid />
            <OverviewResponseMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mb-6">
              <div className="lg:col-span-2">
                <SentimentChart />
              </div>
              <div className="lg:col-span-1">
                <FacilityHeatmap />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <OverviewNeedsAttention />
              <OverviewWeekSummary />
              <OverviewNpsSummary />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <OverviewSourceBreakdown />
              <OverviewResolutionFunnel />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <OverviewTopCategories />
              <OverviewByDepartment />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <OverviewHighlights />
              <OverviewTrendingIssues />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <OverviewActivityByHour />
              <OverviewWorkflowsToday />
            </div>
          </>
        );
    }
  };

  if (showLanding) {
    return (
      <Landing onEnter={() => setShowLanding(false)} />
    );
  }

  return (
    <>
      <style>
        {`
          * {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
        `}
      </style>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
          activePage={activePage}
          onPageChange={setActivePage}
        />
        <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'} bg-slate-50 dark:bg-slate-900 min-h-screen`}>
          <Header />
          <main className="p-6 text-gray-900 dark:text-slate-100">{renderPage()}</main>
        </div>
        <Toast message={toastMessage} isVisible={showToast} onClose={handleCloseToast} />
        {showChat && (
          <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-600 overflow-hidden transition-colors">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 dark:bg-slate-900 text-white">
              <span className="font-medium">{t('chat.title')}</span>
              <button
                onClick={() => setShowChat(false)}
                className="p-1 hover:bg-slate-700 rounded"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 min-h-[120px]">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-2.5 text-sm text-gray-800 dark:text-slate-200">
                {t('chat.greeting')}
              </div>
              <input
                type="text"
                placeholder={t('chat.placeholder')}
                className="mt-3 w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
              />
            </div>
          </div>
        )}
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-slate-800 dark:bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-700 dark:hover:bg-slate-600 hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </>
  );
}

export default App;
