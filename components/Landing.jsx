import { ArrowRight } from 'lucide-react';

const Landing = ({ onEnter }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-6 transition-colors"
      style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: 'inherit' }}>
        healIQ
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium" style={{ fontFamily: 'inherit' }}>
        Beyond the Survey.
      </p>
      <button
        onClick={onEnter}
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
        style={{ fontFamily: 'inherit' }}
      >
        Enter Dashboard
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Landing;
