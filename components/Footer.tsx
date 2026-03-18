import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 px-4 mt-auto border-t border-slate-700 no-print">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-2 text-sm md:text-base">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span className="hover:text-emerald-400 transition-colors duration-200 cursor-default flex items-center gap-2">
              <span className="font-bold">Zalo:</span> 0972968098
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;