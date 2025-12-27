import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 text-sm py-24 px-6 border-t border-gray-900">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        
        <h2 className="font-semibold text-[#ededed] tracking-tight opacity-90">Ishit Singh © 2024</h2>
        
        <p className="text-gray-600 font-medium">Built with care.</p>

        <div className="flex space-x-6 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#ededed] hover:underline transition-all">GitHub</a>
            <a href="mailto:contact@ishitsingh.com" className="text-gray-500 hover:text-[#ededed] hover:underline transition-all">Contact</a>
        </div>

      </div>
    </footer>
  );
};