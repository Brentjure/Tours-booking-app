import classes from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={classes.section_cta} id="cta">
      <div className="container">
        <div className={classes.cta}>
          <div className={classes.cta_text_box}>
            <h2 className="heading-secondary">
              Infinite memories. Make it yours today!
            </h2>
            <p className={classes.cta_text}>
              Infite memories. Make it yours today. Sign up now to book your
              perfect dreeam tour
            </p>
            <form className={classes.cta_form} action="">
              <div>
                <label for="full-name">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Brent Otieno"
                  required
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label for="password">Password</label>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label for="confirm-password">Confirm password</label>
                <input
                  type="password"
                  name=""
                  id="confirm-password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button class="button btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className={classes.cta_img_box}
            role="img"
            aria-label="lady swing on a rope"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
