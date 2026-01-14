'use client';

import { useState } from 'react';
import { useSession } from '@/context/SessionContext';
import { ChatInterface } from './ChatInterface';

const INITIAL_MESSAGE = `Welcome to The Detox.

I'm here to break your comfortable narratives. Before we can build something new, we need to destroy some lies.

Let's start with the first truth-telling:

**What industry "best practice" does everyone follow—but you secretly know is complete nonsense?**

Not the safe answer. The real one.`;

export function Room1() {
  const { session, updateRoom1, completeRoom, setCurrentRoom } = useSession();
  const [activeField, setActiveField] = useState<'lie' | 'cow' | 'mortem' | null>(null);

  const room1 = session.room1;
  const allFieldsFilled = room1.theLie && room1.theSacredCow && room1.thePreMortem;

  const handleProceed = () => {
    if (allFieldsFilled) {
      completeRoom(1);
      setCurrentRoom(2);
    }
  };

  return (
    <div className="min-h-screen room-1 text-[var(--room-fg)]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-[var(--room-muted)] mb-2">Room 1</p>
          <h1 className="text-4xl font-light mb-2">The Detox</h1>
          <p className="text-[var(--room-accent)] text-sm">The Prosecutor</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Chat Interface */}
          <div className="bg-white/50 backdrop-blur rounded-lg border border-[var(--room-border)] h-[600px] flex flex-col">
            <div className="p-4 border-b border-[var(--room-border)]">
              <p className="text-sm text-[var(--room-muted)]">
                &quot;That feels safe. What are you actually afraid to say?&quot;
              </p>
            </div>
            <ChatInterface room={1} initialMessage={INITIAL_MESSAGE} />
          </div>

          {/* Right: Input Fields */}
          <div className="space-y-6">
            {/* The Lie */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'lie'
                  ? 'border-[var(--room-accent)] bg-white'
                  : 'border-[var(--room-border)] bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setActiveField('lie')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h3 className="font-medium">The Lie</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    What industry &quot;best practice&quot; is actually nonsense?
                  </p>
                </div>
              </div>
              {activeField === 'lie' ? (
                <textarea
                  value={room1.theLie}
                  onChange={(e) => updateRoom1({ theLie: e.target.value })}
                  className="input-field w-full min-h-[100px] resize-none"
                  placeholder="The lie we all pretend to believe..."
                  autoFocus
                />
              ) : room1.theLie ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-border)]/20 rounded">
                  {room1.theLie.slice(0, 100)}{room1.theLie.length > 100 ? '...' : ''}
                </p>
              ) : null}
            </div>

            {/* The Sacred Cow */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'cow'
                  ? 'border-[var(--room-accent)] bg-white'
                  : 'border-[var(--room-border)] bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setActiveField('cow')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🐄</span>
                <div>
                  <h3 className="font-medium">The Sacred Cow</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    What internal project/team would cause a revolt if you touched it?
                  </p>
                </div>
              </div>
              {activeField === 'cow' ? (
                <textarea
                  value={room1.theSacredCow}
                  onChange={(e) => updateRoom1({ theSacredCow: e.target.value })}
                  className="input-field w-full min-h-[100px] resize-none"
                  placeholder="The thing no one dares to question..."
                  autoFocus
                />
              ) : room1.theSacredCow ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-border)]/20 rounded">
                  {room1.theSacredCow.slice(0, 100)}{room1.theSacredCow.length > 100 ? '...' : ''}
                </p>
              ) : null}
            </div>

            {/* The Pre-Mortem */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'mortem'
                  ? 'border-[var(--room-accent)] bg-white'
                  : 'border-[var(--room-border)] bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setActiveField('mortem')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">💀</span>
                <div>
                  <h3 className="font-medium">The Pre-Mortem</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    It&apos;s 2028. You failed. Why?
                  </p>
                </div>
              </div>
              {activeField === 'mortem' ? (
                <textarea
                  value={room1.thePreMortem}
                  onChange={(e) => updateRoom1({ thePreMortem: e.target.value })}
                  className="input-field w-full min-h-[100px] resize-none"
                  placeholder="The failure you can see coming but won't admit..."
                  autoFocus
                />
              ) : room1.thePreMortem ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-border)]/20 rounded">
                  {room1.thePreMortem.slice(0, 100)}{room1.thePreMortem.length > 100 ? '...' : ''}
                </p>
              ) : null}
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!allFieldsFilled}
              className="btn-primary w-full text-center"
            >
              {allFieldsFilled ? 'Enter The Elevation →' : 'Complete all fields to proceed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
