import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .toast-animate {
            animation: slideUp 0.3s ease-out;
          }
        `}
      </style>
      <div className="fixed bottom-6 right-6 z-50 toast-animate">
        <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[320px]">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <p className="flex-1 font-medium">{message}</p>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Toast;
