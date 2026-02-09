import { useState, useRef, useEffect } from 'react';
import { Search, Bell, User, MapPin, AlertTriangle, AlertCircle, Info, Globe, Sun, Moon } from 'lucide-react';
import { hospitalAlerts } from '../mockData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const LANGUAGES = [
  { code: 'en', labelKey: 'language.english' },
  { code: 'hi', labelKey: 'language.hindi' },
  { code: 'ta', labelKey: 'language.tamil' },
];

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [alerts, setAlerts] = useState(hospitalAlerts);
  const dropdownRef = useRef(null);
  const langRef = useRef(null);

  const unreadCount = alerts.filter((a) => !a.read).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLanguage(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const markAsRead = (id) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, read: true } : a)));
  };

  const getSeverityStyles = (severity) => {
    switch (severity) {
      case 'critical':
        return {
          bg: 'bg-red-50 border-red-200',
          icon: <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />,
          badge: 'bg-red-500',
        };
      case 'warning':
        return {
          bg: 'bg-amber-50 border-amber-200',
          icon: <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />,
          badge: 'bg-amber-500',
        };
      case 'high':
        return {
          bg: 'bg-orange-50 border-orange-200',
          icon: <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />,
          badge: 'bg-orange-500',
        };
      default:
        return {
          bg: 'bg-blue-50 border-blue-200',
          icon: <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />,
          badge: 'bg-blue-500',
        };
    }
  };

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-6 py-4 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('header.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setShowLanguage(!showLanguage)}
              className="p-2 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              aria-label={t('language.selectLanguage')}
              title={t('language.selectLanguage')}
            >
              <Globe className="w-6 h-6" />
            </button>
            {showLanguage && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 z-50 py-1">
                <p className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                  {t('language.selectLanguage')}
                </p>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguage(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                        : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    {t(lang.labelKey)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="View notifications"
            >
              <Bell className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t('header.hospitalAlerts')}</h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{t('header.alertsByLocation')}</p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {alerts.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-slate-400">
                      {t('header.noNewAlerts')}
                    </div>
                  ) : (
                    alerts.map((alert) => {
                      const styles = getSeverityStyles(alert.severity);
                      return (
                        <button
                          key={alert.id}
                          onClick={() => markAsRead(alert.id)}
                          className={`w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors ${!alert.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
                        >
                          <div className="flex gap-3">
                            <div className="mt-0.5">{styles.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200">
                                  <MapPin className="w-3 h-3" />
                                  {alert.location}
                                </span>
                                {!alert.read && (
                                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.title}</p>
                              <p className="text-xs text-gray-600 dark:text-slate-400 mt-0.5 line-clamp-2">
                                {alert.message}
                              </p>
                              <p className="text-xs text-gray-400 dark:text-slate-500 mt-2">{alert.timeAgo}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50">
                  <p className="text-xs text-gray-500 dark:text-slate-400 text-center">{t('header.alertsFrom')}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-slate-600">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{t('header.adminUser')}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400">{t('header.adminEmail')}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
