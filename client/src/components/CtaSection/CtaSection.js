import { useState } from 'react';

import SignUpTextBox from '../Auth/SignUpTextBox';
import LoginTextBox from '../Auth/LoginTextBox';
import Cta from './Cta';
import classes from './CtaSection.module.css';

const CtaSection = () => {
  const [show, setShow] = useState(true);
  return (
    <section className={classes.section_cta} id="cta">
      <div className="container">
        <Cta />
      </div>
    </section>
  );
};

export default CtaSection;
