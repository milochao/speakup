'use client';

import { useSession } from '@/context/SessionContext';
import { LandingPage } from '@/components/LandingPage';
import { Room1 } from '@/components/Room1';
import { Room2 } from '@/components/Room2';
import { Room3 } from '@/components/Room3';
import { Room4 } from '@/components/Room4';
import { DecisionMemo } from '@/components/DecisionMemo';
import { ProgressIndicator } from '@/components/ProgressIndicator';

export default function Home() {
  const { session } = useSession();

  // Show landing page if no room is active (currentRoom defaults to 1, but we check for actual progress)
  const hasStarted = session.completedRooms.length > 0 ||
    session.room1.theLie ||
    session.room1.theSacredCow ||
    session.room1.thePreMortem ||
    session.chatHistory[1].length > 0;

  // If user hasn't started, show landing
  if (!hasStarted && session.currentRoom === 1) {
    return <LandingPage />;
  }

  const renderRoom = () => {
    switch (session.currentRoom) {
      case 1:
        return <Room1 />;
      case 2:
        return <Room2 />;
      case 3:
        return <Room3 />;
      case 4:
        return <Room4 />;
      case 5:
        return <DecisionMemo />;
      default:
        return <Room1 />;
    }
  };

  return (
    <div className={`min-h-screen room-${session.currentRoom}`}>
      {/* Progress Indicator - show for rooms 1-4 */}
      {session.currentRoom < 5 && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--room-bg)]/80 backdrop-blur-sm border-b border-[var(--room-border)]">
          <ProgressIndicator
            currentRoom={session.currentRoom}
            completedRooms={session.completedRooms}
          />
        </div>
      )}

      {/* Add padding for fixed header */}
      <div className={session.currentRoom < 5 ? 'pt-20' : ''}>
        {renderRoom()}
      </div>
    </div>
  );
}
