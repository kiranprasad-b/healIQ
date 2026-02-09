import { LayoutDashboard, Radio, HeartHandshake, BarChart3, Settings, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = ({ isCollapsed, onToggle, activePage, onPageChange }) => {
  const { t } = useLanguage();
  const navItems = [
    { id: 'overview', icon: LayoutDashboard, labelKey: 'sidebar.overview' },
    { id: 'livefeed', icon: Radio, labelKey: 'sidebar.liveFeed' },
    { id: 'recovery', icon: HeartHandshake, labelKey: 'sidebar.serviceRecovery' },
    { id: 'analytics', icon: BarChart3, labelKey: 'sidebar.analytics' },
    { id: 'settings', icon: Settings, labelKey: 'sidebar.settings' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-screen bg-slate-800 dark:bg-slate-900 border-r border-slate-700 dark:border-slate-800 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        {/* Logo/Brand and Hamburger */}
        <div className={`px-6 py-6 border-b border-slate-700 dark:border-slate-800 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              <h1 className="text-xl font-bold text-white">healIQ</h1>
              <p className="text-sm text-slate-400 mt-1">{t('sidebar.slogan')}</p>
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors text-white"
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`flex-1 py-6 space-y-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center rounded-lg transition-colors ${
                  isCollapsed ? 'justify-center px-3 py-3' : 'gap-3 px-4 py-3'
                } ${
                  isActive
                    ? 'bg-slate-700 dark:bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-800/50 hover:text-white'
                }`}
                title={isCollapsed ? t(item.labelKey) : ''}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{t(item.labelKey)}</span>}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
