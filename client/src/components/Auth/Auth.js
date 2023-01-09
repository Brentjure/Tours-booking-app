import Modal from '../UI/Modal';
import Cta from '../CtaSection/Cta';

const Auth = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Cta />
    </Modal>
  );
};

export default Auth;
