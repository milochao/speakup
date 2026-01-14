'use client';

import { useState } from 'react';
import { useSession } from '@/context/SessionContext';
import { ChatInterface } from './ChatInterface';

const INITIAL_MESSAGE = `Entering The Leverage Map.

Dreams are cheap. Mechanics are expensive.

You've got a vision. Now show me the engineering.

**What specific customer behavior changes when this works?**

Not "they'll love us more." What do they actually *do* differently?`;

export function Room3() {
  const { session, updateRoom3, completeRoom, setCurrentRoom } = useSession();
  const [activeField, setActiveField] = useState<'customer' | 'mechanism' | 'moat' | 'tradeoff' | null>(null);

  const room3 = session.room3;
  const allFieldsFilled = room3.customerChange && room3.mechanism && room3.moat && room3.tradeOff;

  const handleProceed = () => {
    if (allFieldsFilled) {
      completeRoom(3);
      setCurrentRoom(4);
    }
  };

  const handleBack = () => {
    setCurrentRoom(2);
  };

  return (
    <div className="min-h-screen room-3 text-[var(--room-fg)] relative">
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <button
            onClick={handleBack}
            className="absolute left-4 top-8 text-[var(--room-muted)] hover:text-[var(--room-fg)] text-sm font-mono"
          >
            ← Back to Elevation
          </button>
          <p className="text-sm uppercase tracking-widest text-[var(--room-muted)] mb-2 font-mono">Room 3</p>
          <h1 className="text-4xl font-light mb-2 font-mono">The Leverage Map</h1>
          <p className="text-[var(--room-accent)] text-sm font-mono">The Operator</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Chat Interface */}
          <div className="bg-[var(--room-border)]/20 backdrop-blur rounded border border-[var(--room-border)] h-[600px] flex flex-col">
            <div className="p-4 border-b border-[var(--room-border)]">
              <p className="text-sm text-[var(--room-muted)] font-mono">
                &quot;Hope is not a strategy. Show me the leverage.&quot;
              </p>
            </div>
            <ChatInterface room={3} initialMessage={INITIAL_MESSAGE} />
          </div>

          {/* Right: The Leverage Map Grid */}
          <div className="space-y-4">
            <div className="text-xs text-[var(--room-muted)] font-mono uppercase tracking-widest mb-4">
              // LEVERAGE_MAP.config
            </div>

            {/* Customer Change */}
            <div
              className={`p-5 rounded border transition-all cursor-pointer font-mono ${
                activeField === 'customer'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] hover:border-[var(--room-muted)]'
              }`}
              onClick={() => setActiveField('customer')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--room-accent)]">▸</span>
                <span className="text-xs uppercase tracking-wider">customer_change</span>
              </div>
              <p className="text-xs text-[var(--room-muted)] mb-2">
                What specific behavior changes?
              </p>
              {activeField === 'customer' ? (
                <textarea
                  value={room3.customerChange}
                  onChange={(e) => updateRoom3({ customerChange: e.target.value })}
                  className="input-field w-full min-h-[80px] resize-none bg-transparent font-mono text-sm"
                  placeholder="// Define observable behavior change..."
                  autoFocus
                />
              ) : room3.customerChange ? (
                <p className="text-sm p-2 bg-[var(--room-border)]/30 rounded font-mono">
                  {room3.customerChange.slice(0, 80)}{room3.customerChange.length > 80 ? '...' : ''}
                </p>
              ) : (
                <p className="text-sm text-[var(--room-muted)]/50 font-mono">null</p>
              )}
            </div>

            {/* Mechanism */}
            <div
              className={`p-5 rounded border transition-all cursor-pointer font-mono ${
                activeField === 'mechanism'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] hover:border-[var(--room-muted)]'
              }`}
              onClick={() => setActiveField('mechanism')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--room-accent)]">▸</span>
                <span className="text-xs uppercase tracking-wider">mechanism</span>
              </div>
              <p className="text-xs text-[var(--room-muted)] mb-2">
                What forces that change? (Incentive / Default / Network)
              </p>
              {activeField === 'mechanism' ? (
                <textarea
                  value={room3.mechanism}
                  onChange={(e) => updateRoom3({ mechanism: e.target.value })}
                  className="input-field w-full min-h-[80px] resize-none bg-transparent font-mono text-sm"
                  placeholder="// Incentive structure, default behavior, or network effect..."
                  autoFocus
                />
              ) : room3.mechanism ? (
                <p className="text-sm p-2 bg-[var(--room-border)]/30 rounded font-mono">
                  {room3.mechanism.slice(0, 80)}{room3.mechanism.length > 80 ? '...' : ''}
                </p>
              ) : (
                <p className="text-sm text-[var(--room-muted)]/50 font-mono">null</p>
              )}
            </div>

            {/* Moat */}
            <div
              className={`p-5 rounded border transition-all cursor-pointer font-mono ${
                activeField === 'moat'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] hover:border-[var(--room-muted)]'
              }`}
              onClick={() => setActiveField('moat')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--room-accent)]">▸</span>
                <span className="text-xs uppercase tracking-wider">moat</span>
              </div>
              <p className="text-xs text-[var(--room-muted)] mb-2">
                Why is it hard to copy? (Data / Supply / Regulatory)
              </p>
              {activeField === 'moat' ? (
                <textarea
                  value={room3.moat}
                  onChange={(e) => updateRoom3({ moat: e.target.value })}
                  className="input-field w-full min-h-[80px] resize-none bg-transparent font-mono text-sm"
                  placeholder="// Proprietary data, exclusive supply, regulatory capture..."
                  autoFocus
                />
              ) : room3.moat ? (
                <p className="text-sm p-2 bg-[var(--room-border)]/30 rounded font-mono">
                  {room3.moat.slice(0, 80)}{room3.moat.length > 80 ? '...' : ''}
                </p>
              ) : (
                <p className="text-sm text-[var(--room-muted)]/50 font-mono">null</p>
              )}
            </div>

            {/* Trade-off */}
            <div
              className={`p-5 rounded border transition-all cursor-pointer font-mono ${
                activeField === 'tradeoff'
                  ? 'border-[var(--room-accent)] bg-[var(--room-accent)]/5'
                  : 'border-[var(--room-border)] hover:border-[var(--room-muted)]'
              }`}
              onClick={() => setActiveField('tradeoff')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--room-accent)]">▸</span>
                <span className="text-xs uppercase tracking-wider">trade_off</span>
              </div>
              <p className="text-xs text-[var(--room-muted)] mb-2">
                What do we explicitly stop doing?
              </p>
              {activeField === 'tradeoff' ? (
                <textarea
                  value={room3.tradeOff}
                  onChange={(e) => updateRoom3({ tradeOff: e.target.value })}
                  className="input-field w-full min-h-[80px] resize-none bg-transparent font-mono text-sm"
                  placeholder="// Explicit sacrifice required..."
                  autoFocus
                />
              ) : room3.tradeOff ? (
                <p className="text-sm p-2 bg-[var(--room-border)]/30 rounded font-mono">
                  {room3.tradeOff.slice(0, 80)}{room3.tradeOff.length > 80 ? '...' : ''}
                </p>
              ) : (
                <p className="text-sm text-[var(--room-muted)]/50 font-mono">null</p>
              )}
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              disabled={!allFieldsFilled}
              className="btn-primary w-full text-center font-mono"
            >
              {allFieldsFilled ? 'EXECUTE: Enter Commitment →' : '// Complete all fields to proceed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
