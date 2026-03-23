import { useEffect, useRef } from 'react';
import Input from '../reusable/Input';
import Modal, { ModalHandle } from '../reusable/Modal';
import { Button } from '../reusable/Button';

type BookSessionProps = {
  onDone: () => void;
};

const BookSession = ({ onDone }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);

  const handleOnCloseModal = () => {
    onDone();
  };

  const handleSubmit = () => {};

  const handleShowModal = () => {
    if (modal.current) modal.current.open();
  };

  useEffect(() => {
    handleShowModal();
  }, []);

  return (
    <Modal ref={modal} onClose={handleOnCloseModal}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={handleOnCloseModal}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
