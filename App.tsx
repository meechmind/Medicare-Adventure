
import React, { useState, useRef, useEffect } from 'react';
import { scenarios } from './constants.ts';
import type { Scenario, Choice, Outcome } from './types.ts';

// Inline CheckIcon to avoid import resolution issues
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Helper function for custom smooth scrolling
const customSmoothScrollTo = (element: HTMLElement, duration: number, offset: number = 0) => {
  const startPosition = window.scrollY;
  // element.getBoundingClientRect().top is relative to the viewport
  const elementPosition = element.getBoundingClientRect().top;
  // Scroll so that the element is at 'offset' pixels from the top
  const targetPosition = startPosition + elementPosition - offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Ease-in-out quad
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};

// Component to display the list of all scenarios or a focused single scenario
const ScenarioListView: React.FC<{
  activeScenarioId: number | null;
  onNavigate: (id: number | null) => void;
  onSelectChoice: (choice: Choice) => void;
}> = ({ activeScenarioId, onNavigate, onSelectChoice }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleExpand = (id: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      onNavigate(id);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onNavigate(null);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  // Render the expanded scenario view
  if (activeScenarioId !== null) {
    const scenario = scenarios.find(s => s.id === activeScenarioId);
    if (!scenario) return null;

    return (
      <div className={`max-w-4xl mx-auto ${isTransitioning ? 'animate-fade-out' : 'animate-fade-in'}`}>
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border-l-8 border-[#FFC425]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#273469] mb-2">{scenario.title}</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">{scenario.subtitle}</p>
          
          <div className="text-lg prose prose-lg text-gray-900 leading-relaxed mb-10 max-w-none">
            <p>{scenario.intro}</p>
          </div>
          
          <h3 className="text-lg font-bold text-[#273469] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">What should {scenario.character} do?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => onSelectChoice(choice)}
                className="bg-[#273469] text-white p-6 rounded-lg shadow-md hover:bg-[#1a2347] hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#FFC425] focus:ring-opacity-50 transition-all duration-300 text-left h-full flex flex-col justify-between"
              >
                <span className="font-bold text-lg">{choice.title}</span>
                <span className="text-sm text-gray-200 mt-2">{choice.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleBack}
          className="group mt-8 flex items-center text-gray-600 uppercase hover:text-[#273469] font-bold transition-colors focus:outline-none"
        >
          <div className="mr-2 p-1 rounded-full bg-white group-hover:bg-[#FFC425] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
          Back to Scenario List
        </button>
      </div>
    );
  }

  // Default List View (Summary Cards)
  return (
    <div className={`max-w-4xl mx-auto ${isTransitioning ? 'animate-fade-out' : 'animate-fade-in'}`}>
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {scenarios.map((scenario) => (
          <div 
            key={scenario.id} 
            onClick={() => handleExpand(scenario.id)}
            className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-[#FFC425] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleExpand(scenario.id) }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h2 className="text-2xl font-bold text-[#273469] mb-1 group-hover:text-[#3a4b8c] transition-colors">{scenario.title}</h2>
                  <p className="text-lg text-gray-600 font-medium">{scenario.subtitle}</p>
              </div>
              <div className="bg-slate-50 p-2 rounded-full group-hover:bg-[#FFC425] transition-colors duration-300 flex-shrink-0 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#273469]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </div>
            </div>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">{scenario.intro}</p>
            
            <div className="pt-4 border-t border-slate-100 flex items-center text-[#273469] font-bold text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
              <span>Play this Scenario</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component to display the outcome of a selected choice
const OutcomeView: React.FC<{
  choice: Choice;
  currentScenarioId: number | null;
  onBack: () => void;
  onNext: (id: number) => void;
}> = ({ choice, currentScenarioId, onBack, onNext }) => {
    const { outcome } = choice;
    const [showTakeaways, setShowTakeaways] = useState(false);
    const takeawaysRef = useRef<HTMLDivElement>(null);
    
    // Find next scenario logic
    const currentIndex = scenarios.findIndex(s => s.id === currentScenarioId);
    const nextScenario = currentIndex !== -1 && currentIndex < scenarios.length - 1 ? scenarios[currentIndex + 1] : null;

    const getResultColor = (result: string) => {
        if (result.includes("Jackpot!") || result.includes("Smart 'Goldilocks' Move!")) return "text-green-600";
        if (result.includes("Coverage Loss!") || result.includes("Risk of Losing Coverage")) return "text-red-600";
        if (result.includes("Gap in Coverage!")) return "text-amber-600";
        return "text-[#273469]";
    }

    useEffect(() => {
        if (showTakeaways && takeawaysRef.current) {
            // Wait for the expansion animation (100ms) to complete so the document height 
            // has adjusted, allowing the scroll to reach the top if necessary.
            setTimeout(() => {
                if (takeawaysRef.current) {
                    // Use custom smooth scroll with 1000ms duration
                    // 24px approximates the scroll-mt-6 (1.5rem) used in CSS
                    customSmoothScrollTo(takeawaysRef.current, 1000, 24);
                }
            }, 150);
        }
    }, [showTakeaways]);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border-l-8 border-[#FFC425]">
            
            {/* You Selected Section*/}
            <div className="mb-8 pb-6 border-b border-slate-100">
                <span className="text-sm md:text-xs font-bold text-gray-600 uppercase tracking-widest block mb-2">You Selected</span>
                <div className="text-xl md:text-lg font-bold text-[#273469]">{choice.title}</div>
            </div>

            {/* Result Title */}
            <div className="mb-10">
                <h3 className={`text-4xl md:text-4xl font-extrabold ${getResultColor(outcome.result)}`}>{outcome.result}</h3>
            </div>
          
            {/* Explanation Card*/}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-8">
                <div className="p-4 md:p-6 border-b border-slate-200">
                    <h4 className="text-xl font-bold text-[#273469]">The Explanation</h4>
                </div>
                <div className="p-4 md:p-6">
                    <p className="text-lg text-gray-900 leading-relaxed">
                        {outcome.clarification}
                    </p>
                </div>
            </div>
            
            {/* Key Takeaways Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden scroll-mt-6" ref={takeawaysRef}>
                <button 
                    onClick={() => setShowTakeaways(!showTakeaways)}
                    className={`w-full flex items-center justify-between p-4 md:p-6 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#FFC425] focus:ring-opacity-50 ${showTakeaways ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
                >
                    <span className="text-xl font-bold text-[#273469]">Key Takeaways & Lessons</span>
                    <div className={`transform transition-transform duration-500 text-[#273469] ${showTakeaways ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${showTakeaways ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white border-t border-slate-100">
                        <ul className="divide-y divide-slate-100">
                            {outcome.keyTakeaways.map((takeaway, index) => (
                            <li key={index} className="flex items-start p-6 md:p-8 hover:bg-slate-50 transition-colors duration-200">
                                <div className="mr-5 flex-shrink-0 mt-1">
                                    <div className="h-6 w-6 rounded-full border border-green-500 flex items-center justify-center bg-white">
                                         <svg className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                         </svg>
                                    </div>
                                </div>
                                <span className="text-gray-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: takeaway }} />
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <button
            onClick={onBack}
            className="group flex items-center text-gray-600 uppercase hover:text-[#273469] font-bold transition-colors focus:outline-none"
          >
            <div className="mr-2 p-1 rounded-full bg-white group-hover:bg-[#FFC425] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </div>
            Back to Scenarios
          </button>

          {nextScenario && (
            <button
              onClick={() => onNext(nextScenario.id)}
              className="group flex items-center text-gray-600 uppercase hover:text-[#273469] font-bold transition-colors focus:outline-none"
            >
              Next Scenario
              <div className="ml-2 p-1 rounded-full bg-white group-hover:bg-[#FFC425] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth={2} stroke="currentColor" fill="none" />
                </svg>
              </div>
            </button>
          )}
        </div>
    </div>
  );
};

const Header: React.FC = () => (
    <header className="bg-[#273469] text-white shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFC425]">
          Maryland Medicare Adventure
        </h1>
        <p className="text-lg text-gray-200 mt-1">Choose your path and learn the rules for 2026!</p>
      </div>
    </header>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'scenarios' | 'outcome'>('scenarios');
  const [activeScenarioId, setActiveScenarioId] = useState<number | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  // Called when expanding/collapsing from the list view
  const handleNavigateScenarios = (id: number | null) => {
    setActiveScenarioId(id);
  };

  const handleSelectChoice = (choice: Choice) => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedChoice(choice);
      setCurrentView('outcome');
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleBackToScenarios = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedChoice(null);
      setCurrentView('scenarios');
      setActiveScenarioId(null); // Reset to list view
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleNextScenario = (nextId: number) => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedChoice(null);
      setCurrentView('scenarios');
      setActiveScenarioId(nextId); // Go directly to next scenario
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <div className="font-sans antialiased min-h-screen flex flex-col bg-slate-100">
      <Header />
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <div className={isExiting ? 'animate-fade-out' : 'animate-fade-in'}>
          {currentView === 'scenarios' && (
            <ScenarioListView 
              activeScenarioId={activeScenarioId}
              onNavigate={handleNavigateScenarios}
              onSelectChoice={handleSelectChoice} 
            />
          )}
          {currentView === 'outcome' && selectedChoice && (
            <OutcomeView 
              choice={selectedChoice} 
              currentScenarioId={activeScenarioId}
              onBack={handleBackToScenarios} 
              onNext={handleNextScenario}
            />
          )}
        </div>
      </main>
      <footer className="bg-slate-200 py-6 text-center text-sm text-gray-600 border-t border-slate-300">
        <div className="container mx-auto px-4">
          <p className="font-medium">&copy; 2026 Maryland Medicare Adventure. For educational purposes only.</p>
          <p className="mt-1 opacity-75 italic text-xs">Developed with Google Gemini AI assistance.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
