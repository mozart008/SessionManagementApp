import { useContext } from 'react';
import { SessionsContext } from '../store/sessions-context';

const useSessionContext = () => {
  const context = useContext(SessionsContext);
  if (!context)
    throw new Error(
      'useSessionsContext must be used within a SessionsContextProvider',
    );

  return context;
};

export default useSessionContext;
