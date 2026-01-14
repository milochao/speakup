'use client';

import { useState } from 'react';
import { useSession } from '@/context/SessionContext';
import { ChatInterface } from './ChatInterface';

const INITIAL_MESSAGE = `Welcome to The Elevation.

You've shed the lies. Now let's dream dangerously.

Forget budgets. Forget "realistic." Forget what the board would say.

**Which brand—in any industry—makes you genuinely jealous?**

Not who you should admire. Who keeps you up at night with envy?`;

export function Room2() {
  const { session, updateRoom2, completeRoom, setCurrentRoom } = useSession();
  const [activeField, setActiveField] = useState<'envy' | 'advantage' | 'leap' | null>(null);

  const room2 = session.room2;
  const allFieldsFilled = room2.theEnvy && room2.theUnfairAdvantage && room2.categoryLeap;

  const handleProceed = () => {
    if (allFieldsFilled) {
      completeRoom(2);
      setCurrentRoom(3);
    }
  };

  const handleBack = () => {
    setCurrentRoom(1);
  };

  return (
    <div className="min-h-screen room-2 text-[var(--room-fg)] relative">
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <button
            onClick={handleBack}
            className="absolute left-4 top-8 text-[var(--room-muted)] hover:text-[var(--room-fg)] text-sm"
          >
            ← Back to Detox
          </button>
          <p className="text-sm uppercase tracking-widest text-[var(--room-muted)] mb-2">Room 2</p>
          <h1 className="text-4xl font-light mb-2">The Elevation</h1>
          <p className="text-[var(--room-accent)] text-sm">The Story Architect</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Chat Interface */}
          <div className="bg-[var(--room-border)]/20 backdrop-blur rounded-lg border border-[var(--room-border)] h-[600px] flex flex-col">
            <div className="p-4 border-b border-[var(--room-border)]">
              <p className="text-sm text-[var(--room-muted)]">
                &quot;Ignore the budget. What if we did the opposite?&quot;
              </p>
            </div>
            <ChatInterface room={2} initialMessage={INITIAL_MESSAGE} />
          </div>

          {/* Right: Input Fields */}
          <div className="space-y-6">
            {/* The Envy */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'envy'
                  ? 'border-[var(--room-accent)] bg-[var(--room-border)]/30'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10 hover:bg-[var(--room-border)]/20'
              }`}
              onClick={() => setActiveField('envy')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-medium">The Envy</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    Which brand (any industry) are you jealous of?
                  </p>
                </div>
              </div>
              {activeField === 'envy' ? (
                <textarea
                  value={room2.theEnvy}
                  onChange={(e) => updateRoom2({ theEnvy: e.target.value })}
                  className="input-field w-full min-h-[100px] resize-none bg-transparent"
                  placeholder="The brand that makes you wish you'd built it..."
                  autoFocus
                />
              ) : room2.theEnvy ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-border)]/20 rounded">
                  {room2.theEnvy.slice(0, 100)}{room2.theEnvy.length > 100 ? '...' : ''}
                </p>
              ) : null}
            </div>

            {/* The Unfair Advantage */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'advantage'
                  ? 'border-[var(--room-accent)] bg-[var(--room-border)]/30'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10 hover:bg-[var(--room-border)]/20'
              }`}
              onClick={() => setActiveField('advantage')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🔮</span>
                <div>
                  <h3 className="font-medium">The Unfair Advantage</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    What asset do you own that competitors can&apos;t buy?
                  </p>
                </div>
              </div>
              {activeField === 'advantage' ? (
                <textarea
                  value={room2.theUnfairAdvantage}
                  onChange={(e) => updateRoom2({ theUnfairAdvantage: e.target.value })}
                  className="input-field w-full min-h-[100px] resize-none bg-transparent"
                  placeholder="Data, trust, relationships, supply chain..."
                  autoFocus
                />
              ) : room2.theUnfairAdvantage ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-border)]/20 rounded">
                  {room2.theUnfairAdvantage.slice(0, 100)}{room2.theUnfairAdvantage.length > 100 ? '...' : ''}
                </p>
              ) : null}
            </div>

            {/* The Category Leap */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'leap'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/10'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10 hover:bg-[var(--room-border)]/20'
              }`}
              onClick={() => setActiveField('leap')}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="font-medium text-[var(--room-accent)]">The Category Leap</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    Combine Envy + Unfair Advantage into a 2-sentence vision
                  </p>
                </div>
              </div>
              {activeField === 'leap' ? (
                <textarea
                  value={room2.categoryLeap}
                  onChange={(e) => updateRoom2({ categoryLeap: e.target.value })}
                  className="input-field w-full min-h-[120px] resize-none bg-transparent"
                  placeholder="We will become [Envy brand's quality] by leveraging [our unfair advantage] to..."
                  autoFocus
                />
              ) : room2.categoryLeap ? (
                <p className="text-sm mt-2 p-3 bg-[var(--room-accent)]/10 rounded border border-[var(--room-accent)]/30">
                  {room2.categoryLeap}
                </p>
              ) : null}
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!allFieldsFilled}
              className="btn-primary w-full text-center"
            >
              {allFieldsFilled ? 'Enter The Leverage Map →' : 'Complete all fields to proceed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
