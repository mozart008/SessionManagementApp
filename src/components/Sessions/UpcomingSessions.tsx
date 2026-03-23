import { useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../reusable/Modal';
import useSessionContext from '../../hooks/useSessionContext';
import { Button } from '../reusable/Button';
import UpcomingSession from './UpcomingSession';

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionContext = useSessionContext();
  const hasSessions = sessionContext.upcomingSessions.length > 0;

  const handleModalShow = () => {
    if (modal?.current) {
      modal.current.open();
    }
  };

  useEffect(() => {
    handleModalShow();
  }, []);

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionContext.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession session={session} />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
