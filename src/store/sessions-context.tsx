import { createContext, ReactNode, useReducer } from 'react';

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type SessionState = {
  upcomingSessions: Session[];
};

type SessionAction = {
  type: 'BOOK_SESSION';
  session: Session;
};

type SessionContextValue = SessionState & {
  bookSession: (session: Session) => void;
};

export const SessionsContext = createContext<SessionContextValue | null>(null);

const sessionReducer = (
  state: SessionState,
  action: SessionAction,
): SessionState => {
  if (action.type === 'BOOK_SESSION') {
    // only add the session if it is not yet in the upcomming sessions
    if (
      state.upcomingSessions.some((s) => s.id === action.session.id) === false
    )
      return {
        upcomingSessions: state.upcomingSessions.concat(action.session),
      };
  }

  return state;
};

type SessionContextProvider = {
  children: ReactNode;
};

const SessionContextProvider = ({ children }: SessionContextProvider) => {
  const [sessionState, dispatch] = useReducer(sessionReducer, {
    upcomingSessions: [],
  });

  const bookSession = (session: Session) => {
    dispatch({ type: 'BOOK_SESSION', session: session });
  };

  const context = {
    upcomingSessions: sessionState.upcomingSessions,
    bookSession,
  };

  return (
    <SessionsContext.Provider value={context}>
      {children}
    </SessionsContext.Provider>
  );
};

export default SessionContextProvider;
