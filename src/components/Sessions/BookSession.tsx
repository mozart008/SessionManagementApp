import { FormEvent, useEffect, useRef } from 'react';
import Input from '../reusable/Input';
import Modal, { ModalHandle } from '../reusable/Modal';
import { Button } from '../reusable/Button';
import useSessionContext from '../../hooks/useSessionContext';
import { Session } from '../../store/sessions-context';

type BookSessionProps = {
  onDone: () => void;
  selectedSession: Session;
};

const BookSession = ({ onDone, selectedSession }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionContext = useSessionContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); //will normally be sent to server.

    sessionContext.bookSession(selectedSession);
    onDone();
    alert(`Session ${selectedSession.title} successfully added.`);
  };

  const handleShowModal = () => {
    if (modal.current) modal.current.open();
  };

  useEffect(() => {
    handleShowModal();
  }, []);

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
