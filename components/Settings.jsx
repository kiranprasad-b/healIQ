import { useState } from 'react';
import { Bell, Layout, Plug, Building2, Save } from 'lucide-react';
import { settingsDefaults } from '../mockData';

const Settings = () => {
  const [notifications, setNotifications] = useState(settingsDefaults.notifications);
  const [dashboard, setDashboard] = useState(settingsDefaults.dashboard);
  const [integrations, setIntegrations] = useState(settingsDefaults.integrations);
  const [organization, setOrganization] = useState(settingsDefaults.organization);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleIntegration = (id) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, enabled: !i.enabled } : i))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your dashboard and preferences</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Save className="w-4 h-4" />
          {saved ? 'Saved!' : 'Save changes'}
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">Critical alerts (real-time)</span>
            <input
              type="checkbox"
              checked={notifications.criticalAlerts}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, criticalAlerts: e.target.checked }))
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">Daily digest</span>
            <input
              type="checkbox"
              checked={notifications.dailyDigest}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, dailyDigest: e.target.checked }))
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">Notify when workflow assigned</span>
            <input
              type="checkbox"
              checked={notifications.workflowAssigned}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, workflowAssigned: e.target.checked }))
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-700">Email digest</span>
            <select
              value={notifications.emailDigest}
              onChange={(e) =>
                setNotifications((prev) => ({ ...prev, emailDigest: e.target.value }))
              }
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dashboard preferences */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layout className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Default view</label>
            <select
              value={dashboard.defaultView}
              onChange={(e) =>
                setDashboard((prev) => ({ ...prev, defaultView: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="overview">Overview</option>
              <option value="livefeed">Live Feed</option>
              <option value="recovery">Service Recovery</option>
              <option value="analytics">Analytics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Items per page</label>
            <select
              value={dashboard.itemsPerPage}
              onChange={(e) =>
                setDashboard((prev) => ({ ...prev, itemsPerPage: Number(e.target.value) }))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-medium text-gray-700">Show facility heatmap on overview</span>
            <input
              type="checkbox"
              checked={dashboard.showFacilityHeatmap}
              onChange={(e) =>
                setDashboard((prev) => ({ ...prev, showFacilityHeatmap: e.target.checked }))
              }
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Plug className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Integrations</h2>
        </div>
        <p className="text-sm text-gray-500 mb-4">Connect feedback sources to your dashboard.</p>
        <div className="space-y-3">
          {integrations.map((int) => (
            <div
              key={int.id}
              className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">{int.name}</span>
              <button
                onClick={() => toggleIntegration(int.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  int.enabled
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {int.enabled ? 'Connected' : 'Disabled'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Organization */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Organization</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization name</label>
            <input
              type="text"
              value={organization.name}
              onChange={(e) =>
                setOrganization((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <select
              value={organization.timezone}
              onChange={(e) =>
                setOrganization((prev) => ({ ...prev, timezone: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="America/New_York">Eastern (America/New_York)</option>
              <option value="America/Chicago">Central (America/Chicago)</option>
              <option value="America/Denver">Mountain (America/Denver)</option>
              <option value="America/Los_Angeles">Pacific (America/Los_Angeles)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <select
              value={organization.language}
              onChange={(e) =>
                setOrganization((prev) => ({ ...prev, language: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
