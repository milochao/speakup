'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SessionData, RoomNumber, initialSessionData } from '@/types/session';

interface SessionContextType {
  session: SessionData;
  updateRoom1: (data: Partial<SessionData['room1']>) => void;
  updateRoom2: (data: Partial<SessionData['room2']>) => void;
  updateRoom3: (data: Partial<SessionData['room3']>) => void;
  updateRoom4: (data: Partial<SessionData['room4']>) => void;
  addChatMessage: (room: RoomNumber, role: 'user' | 'assistant', content: string) => void;
  setCurrentRoom: (room: RoomNumber) => void;
  completeRoom: (room: RoomNumber) => void;
  canProceedToRoom: (room: RoomNumber) => boolean;
  resetSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const STORAGE_KEY = 'commitment-engine-session';

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionData>(initialSessionData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSession(parsed);
      } catch (e) {
        console.error('Failed to parse saved session:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }
  }, [session, isLoaded]);

  const updateRoom1 = (data: Partial<SessionData['room1']>) => {
    setSession(prev => ({
      ...prev,
      room1: { ...prev.room1, ...data },
    }));
  };

  const updateRoom2 = (data: Partial<SessionData['room2']>) => {
    setSession(prev => ({
      ...prev,
      room2: { ...prev.room2, ...data },
    }));
  };

  const updateRoom3 = (data: Partial<SessionData['room3']>) => {
    setSession(prev => ({
      ...prev,
      room3: { ...prev.room3, ...data },
    }));
  };

  const updateRoom4 = (data: Partial<SessionData['room4']>) => {
    setSession(prev => ({
      ...prev,
      room4: { ...prev.room4, ...data },
    }));
  };

  const addChatMessage = (room: RoomNumber, role: 'user' | 'assistant', content: string) => {
    setSession(prev => ({
      ...prev,
      chatHistory: {
        ...prev.chatHistory,
        [room]: [...prev.chatHistory[room], { role, content }],
      },
    }));
  };

  const setCurrentRoom = (room: RoomNumber) => {
    setSession(prev => ({ ...prev, currentRoom: room }));
  };

  const completeRoom = (room: RoomNumber) => {
    setSession(prev => ({
      ...prev,
      completedRooms: prev.completedRooms.includes(room)
        ? prev.completedRooms
        : [...prev.completedRooms, room],
    }));
  };

  const canProceedToRoom = (room: RoomNumber): boolean => {
    if (room === 1) return true;

    // Check if previous room is completed
    const prevRoom = (room - 1) as RoomNumber;

    switch (prevRoom) {
      case 1:
        const r1 = session.room1;
        return !!(r1.theLie && r1.theSacredCow && r1.thePreMortem);
      case 2:
        const r2 = session.room2;
        return !!(r2.theEnvy && r2.theUnfairAdvantage && r2.categoryLeap);
      case 3:
        const r3 = session.room3;
        return !!(r3.customerChange && r3.mechanism && r3.moat && r3.tradeOff);
      case 4:
        const r4 = session.room4;
        return !!(r4.oneWayDoor && r4.killList.every(k => k) && r4.budgetToken);
      default:
        return false;
    }
  };

  const resetSession = () => {
    setSession(initialSessionData);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <SessionContext.Provider value={{
      session,
      updateRoom1,
      updateRoom2,
      updateRoom3,
      updateRoom4,
      addChatMessage,
      setCurrentRoom,
      completeRoom,
      canProceedToRoom,
      resetSession,
    }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
