import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

const FacilityHeatmap = () => {
  const [hoveredZone, setHoveredZone] = useState(null);

  const zones = [
    { id: 'er', name: 'ER', status: 'critical', message: 'Wait Time > 4hrs (Negative Sentiment Spike)' },
    { id: 'icu', name: 'ICU', status: 'warning', message: 'Moderate Activity' },
    { id: 'wardA', name: 'Ward A', status: 'normal', message: 'Normal Operations' },
    { id: 'wardB', name: 'Ward B', status: 'normal', message: 'Normal Operations' },
    { id: 'cafeteria', name: 'Cafeteria', status: 'normal', message: 'Normal Operations' },
  ];

  const getZoneStyles = (zone) => {
    const baseStyles = 'relative rounded-lg transition-all duration-300 cursor-pointer border-2';
    
    switch (zone.status) {
      case 'critical':
        return `${baseStyles} bg-red-500 border-red-600 pulse-animation`;
      case 'warning':
        return `${baseStyles} bg-yellow-400 border-yellow-500`;
      case 'normal':
        return `${baseStyles} bg-green-500 border-green-600`;
      default:
        return `${baseStyles} bg-gray-400 border-gray-500`;
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
            }
            50% {
              opacity: 0.9;
              box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
            }
          }
          .pulse-animation {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Facility Status Heatmap</h3>
            <p className="text-xs text-gray-500 mt-1">Real-time zone monitoring</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full pulse-animation"></div>
            <span className="text-xs text-gray-600 ml-2">Critical</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className={getZoneStyles(zone)}
              onMouseEnter={() => setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
              style={{ minHeight: '80px' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <span className="text-white font-bold text-sm mb-1">{zone.name}</span>
                {zone.status === 'critical' && (
                  <AlertTriangle className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Tooltip */}
              {hoveredZone === zone.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                  <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-lg whitespace-nowrap">
                    {zone.message}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded border-2 border-red-600"></div>
            <span className="text-gray-600">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded border-2 border-yellow-500"></div>
            <span className="text-gray-600">Warning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded border-2 border-green-600"></div>
            <span className="text-gray-600">Normal</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityHeatmap;
