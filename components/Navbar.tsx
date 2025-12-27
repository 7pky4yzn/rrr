import React from 'react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning', label: 'Learning' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center transition-all duration-500">
      <div className="max-w-5xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Site Title / Home Link */}
        <button 
          onClick={() => onTabChange('home')} 
          className="text-lg font-semibold tracking-tight text-black hover:opacity-70 transition-opacity"
        >
          Ishit Singh
        </button>

        {/* Tab Navigation */}
        <div className="flex space-x-6 md:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                activeTab === tab.id 
                  ? 'text-black' 
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-black rounded-full animate-in fade-in duration-300"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};