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

type BookSessionAction = {
  type: 'BOOK_SESSION';
  session: Session;
};

type CancelSessionAction = {
  type: 'CANCEL_SESSION';
  id: string;
};

type SessionAction = BookSessionAction | CancelSessionAction;

type SessionContextValue = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (id: string) => void;
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

  if (action.type === 'CANCEL_SESSION') {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (s) => s.id !== action.id,
      ),
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
    dispatch({ type: 'BOOK_SESSION', session });
  };

  const cancelSession = (id: string) => {
    dispatch({ type: 'CANCEL_SESSION', id });
  };

  const context: SessionContextValue = {
    upcomingSessions: sessionState.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={context}>
      {children}
    </SessionsContext.Provider>
  );
};

export default SessionContextProvider;
