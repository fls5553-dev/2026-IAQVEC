import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StudyDetails from './components/StudyDetails';
import ParticipationGuide from './components/ParticipationGuide';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <StudyDetails />
        <ParticipationGuide />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;