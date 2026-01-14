'use client';

import { useSession } from '@/context/SessionContext';

export function LandingPage() {
  const { setCurrentRoom, session } = useSession();

  const hasExistingSession = session.room1.theLie || session.room1.theSacredCow || session.room1.thePreMortem;

  const handleStart = () => {
    setCurrentRoom(1);
  };

  const handleContinue = () => {
    setCurrentRoom(session.currentRoom === 5 ? 5 : session.currentRoom || 1);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"></div>
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        {/* Logo / Title */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">WIAA presents</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            The Commitment
            <br />
            <span className="font-semibold">Engine</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-6">
            A high-stakes strategic workshop that forces executives to move from
            <span className="text-white"> dreaming </span>
            to
            <span className="text-white"> irreversible commitment</span>.
          </p>
        </div>

        {/* The 4 Rooms Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {[
            { num: 1, name: 'The Detox', persona: 'Prosecutor', color: 'text-red-400' },
            { num: 2, name: 'The Elevation', persona: 'Story Architect', color: 'text-purple-400' },
            { num: 3, name: 'The Leverage Map', persona: 'Operator', color: 'text-cyan-400' },
            { num: 4, name: 'The Commitment', persona: 'Board Member', color: 'text-amber-400' },
          ].map((room) => (
            <div
              key={room.num}
              className="p-4 border border-gray-800 rounded-lg text-center hover:border-gray-600 transition-colors"
            >
              <span className={`text-2xl font-light ${room.color}`}>{room.num}</span>
              <p className="text-sm font-medium mt-2">{room.name}</p>
              <p className="text-xs text-gray-500 mt-1">{room.persona}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={handleStart}
            className="px-8 py-4 bg-white text-black rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            Begin The Process
          </button>
          {hasExistingSession && (
            <button
              onClick={handleContinue}
              className="px-8 py-4 border border-gray-600 rounded-lg font-medium text-lg hover:border-white transition-colors"
            >
              Continue Session
            </button>
          )}
        </div>

        {/* Warning */}
        <p className="text-xs text-gray-600 mt-8 max-w-md text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Warning: This process is designed to be uncomfortable. You will be challenged to make real decisions, not just talk about them.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-gray-600 text-xs">
        <p>McKinsey meets Black Mirror</p>
      </footer>
    </div>
  );
}
