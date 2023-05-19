import Modal from '../UI/Modal';
import Cta from '../CtaSection/Cta';

const Auth = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Cta onClose={props.onClose} />
    </Modal>
  );
};

export default Auth;
