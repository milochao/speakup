'use client';

import { RoomNumber } from '@/types/session';

interface ProgressIndicatorProps {
  currentRoom: RoomNumber;
  completedRooms: RoomNumber[];
}

const ROOMS = [
  { num: 1, name: 'The Detox', subtitle: 'Prosecutor' },
  { num: 2, name: 'The Elevation', subtitle: 'Story Architect' },
  { num: 3, name: 'The Leverage Map', subtitle: 'Operator' },
  { num: 4, name: 'The Commitment', subtitle: 'Board Member' },
];

export function ProgressIndicator({ currentRoom, completedRooms }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {ROOMS.map((room, index) => {
        const isCompleted = completedRooms.includes(room.num as RoomNumber);
        const isCurrent = currentRoom === room.num;
        const isPast = room.num < currentRoom;

        return (
          <div key={room.num} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  transition-all duration-300
                  ${isCurrent ? 'bg-[var(--room-accent)] text-[var(--room-bg)] scale-110' : ''}
                  ${isCompleted || isPast ? 'bg-[var(--room-accent)] opacity-60 text-[var(--room-bg)]' : ''}
                  ${!isCurrent && !isCompleted && !isPast ? 'border border-[var(--room-border)] text-[var(--room-muted)]' : ''}
                `}
              >
                {isCompleted || isPast ? '✓' : room.num}
              </div>
              <span className={`
                text-xs mt-1 hidden sm:block
                ${isCurrent ? 'text-[var(--room-accent)]' : 'text-[var(--room-muted)]'}
              `}>
                {room.name}
              </span>
            </div>
            {index < ROOMS.length - 1 && (
              <div
                className={`
                  w-8 h-0.5 mx-2
                  ${isPast || isCompleted ? 'bg-[var(--room-accent)] opacity-60' : 'bg-[var(--room-border)]'}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
