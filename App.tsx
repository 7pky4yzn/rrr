import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LearningView } from './components/LearningView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { IntroAnimation } from './components/IntroAnimation';
import { Tab } from './types';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showContent, setShowContent] = useState(false);

  // Trigger content reveal after intro animation
  useEffect(() => {
    if (introComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  // Handle Tab Scroll to Top
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'learning':
        return <LearningView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      
      <div className={`antialiased bg-black text-[#ededed] selection:bg-gray-800 selection:text-white min-h-screen flex flex-col ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        
        {introComplete && (
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
        )}
        
        <main className={`flex-grow transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* Key prop triggers the animation on tab change */}
          <div key={activeTab} className="tab-enter">
             {renderTabContent()}
          </div>
        </main>
        
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;