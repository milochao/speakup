export type RoomNumber = 1 | 2 | 3 | 4 | 5;

export interface Room1Data {
  theLie: string;
  theSacredCow: string;
  thePreMortem: string;
}

export interface Room2Data {
  theEnvy: string;
  theUnfairAdvantage: string;
  categoryLeap: string;
}

export interface Room3Data {
  customerChange: string;
  mechanism: string;
  moat: string;
  tradeOff: string;
}

export type CommitmentType = 'pricing' | 'policy' | 'distribution' | null;

export interface Room4Data {
  oneWayDoor: CommitmentType;
  killList: [string, string, string];
  budgetToken: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface SessionData {
  currentRoom: RoomNumber;
  room1: Room1Data;
  room2: Room2Data;
  room3: Room3Data;
  room4: Room4Data;
  chatHistory: Record<RoomNumber, ChatMessage[]>;
  completedRooms: RoomNumber[];
}

export const initialSessionData: SessionData = {
  currentRoom: 1,
  room1: {
    theLie: '',
    theSacredCow: '',
    thePreMortem: '',
  },
  room2: {
    theEnvy: '',
    theUnfairAdvantage: '',
    categoryLeap: '',
  },
  room3: {
    customerChange: '',
    mechanism: '',
    moat: '',
    tradeOff: '',
  },
  room4: {
    oneWayDoor: null,
    killList: ['', '', ''],
    budgetToken: '',
  },
  chatHistory: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  },
  completedRooms: [],
};
