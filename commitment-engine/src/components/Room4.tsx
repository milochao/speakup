'use client';

import { useState } from 'react';
import { useSession } from '@/context/SessionContext';
import { ChatInterface } from './ChatInterface';
import { CommitmentType } from '@/types/session';

const INITIAL_MESSAGE = `The Commitment Room.

This is where dreams become decisions. Where strategy becomes sacrifice.

You've done the thinking. Now it's time for the blood price.

**First: Choose your One-Way Door.**

What type of irreversible commitment will you make?
- **Pricing Lock**: A pricing structure you commit to publicly
- **Policy Lock**: A policy or guarantee you can't easily reverse
- **Distribution Lock**: An exclusive relationship or channel commitment

Which door will you walk through?`;

const COMMITMENT_OPTIONS: { type: CommitmentType; label: string; description: string }[] = [
  { type: 'pricing', label: 'Pricing Lock', description: 'A pricing structure you commit to publicly' },
  { type: 'policy', label: 'Policy Lock', description: 'A policy or guarantee you can\'t easily reverse' },
  { type: 'distribution', label: 'Distribution Lock', description: 'An exclusive relationship or channel' },
];

export function Room4() {
  const { session, updateRoom4, completeRoom, setCurrentRoom } = useSession();
  const [activeField, setActiveField] = useState<'door' | 'kill' | 'budget' | null>(null);

  const room4 = session.room4;
  const allFieldsFilled = room4.oneWayDoor && room4.killList.every(k => k) && room4.budgetToken;

  const handleProceed = () => {
    if (allFieldsFilled) {
      completeRoom(4);
      setCurrentRoom(5);
    }
  };

  const handleBack = () => {
    setCurrentRoom(3);
  };

  const updateKillListItem = (index: number, value: string) => {
    const newKillList = [...room4.killList] as [string, string, string];
    newKillList[index] = value;
    updateRoom4({ killList: newKillList });
  };

  return (
    <div className="min-h-screen room-4 text-[var(--room-fg)] relative">
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <button
            onClick={handleBack}
            className="absolute left-4 top-8 text-[var(--room-muted)] hover:text-[var(--room-fg)] text-sm"
          >
            ← Back to Leverage Map
          </button>
          <p className="text-sm uppercase tracking-widest text-[var(--room-muted)] mb-2">Room 4</p>
          <h1 className="text-4xl font-medium mb-2">The Commitment</h1>
          <p className="text-[var(--room-accent)] text-sm italic">The Board Member</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Chat Interface */}
          <div className="bg-[var(--room-border)]/30 backdrop-blur rounded-lg border border-[var(--room-border)] h-[650px] flex flex-col">
            <div className="p-4 border-b border-[var(--room-border)]">
              <p className="text-sm text-[var(--room-muted)] italic">
                &quot;You cannot add without subtracting. What dies today?&quot;
              </p>
            </div>
            <ChatInterface room={4} initialMessage={INITIAL_MESSAGE} />
          </div>

          {/* Right: Commitment Fields */}
          <div className="space-y-6">
            {/* The One-Way Door */}
            <div
              className={`p-6 rounded-lg border transition-all ${
                activeField === 'door'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10'
              }`}
              onClick={() => setActiveField('door')}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--room-accent)] text-2xl">⚔</span>
                <div>
                  <h3 className="font-medium text-lg">The One-Way Door</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    Choose your irreversible commitment
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                {COMMITMENT_OPTIONS.map((option) => (
                  <button
                    key={option.type}
                    onClick={(e) => {
                      e.stopPropagation();
                      updateRoom4({ oneWayDoor: option.type });
                    }}
                    className={`p-4 rounded border text-left transition-all ${
                      room4.oneWayDoor === option.type
                        ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/10'
                        : 'border-[var(--room-border)] hover:border-[var(--room-muted)]'
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                    <p className="text-sm text-[var(--room-muted)] mt-1">{option.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* The Kill List */}
            <div
              className={`p-6 rounded-lg border transition-all ${
                activeField === 'kill'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10'
              }`}
              onClick={() => setActiveField('kill')}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--room-accent)] text-2xl">☠</span>
                <div>
                  <h3 className="font-medium text-lg">The Kill List</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    Name 3 active projects/initiatives that stop TODAY
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-[var(--room-accent)] font-mono text-sm w-6">{index + 1}.</span>
                    <input
                      type="text"
                      value={room4.killList[index]}
                      onChange={(e) => updateKillListItem(index, e.target.value)}
                      className="input-field flex-1 bg-transparent"
                      placeholder={`Project/initiative to kill...`}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--room-muted)] mt-3 italic">
                If the kill list isn&apos;t painful, it&apos;s not a real sacrifice.
              </p>
            </div>

            {/* The Budget Token */}
            <div
              className={`p-6 rounded-lg border transition-all cursor-pointer ${
                activeField === 'budget'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] bg-[var(--room-border)]/10 hover:bg-[var(--room-border)]/20'
              }`}
              onClick={() => setActiveField('budget')}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[var(--room-accent)] text-2xl">💰</span>
                <div>
                  <h3 className="font-medium text-lg">The Budget Token</h3>
                  <p className="text-sm text-[var(--room-muted)]">
                    Specific resource being moved to this initiative
                  </p>
                </div>
              </div>
              <textarea
                value={room4.budgetToken}
                onChange={(e) => updateRoom4({ budgetToken: e.target.value })}
                className="input-field w-full min-h-[80px] resize-none bg-transparent"
                placeholder="$X from [source] → [new initiative] OR X headcount from [team] → [new team]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Final Button */}
            <button
              onClick={handleProceed}
              disabled={!allFieldsFilled}
              className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all ${
                allFieldsFilled
                  ? 'bg-[var(--room-accent)] text-black hover:opacity-90'
                  : 'bg-[var(--room-border)] text-[var(--room-muted)] cursor-not-allowed'
              }`}
            >
              {allFieldsFilled ? 'Generate The Decision Memo →' : 'Complete all commitments to proceed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
