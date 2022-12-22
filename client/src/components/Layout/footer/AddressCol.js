import classes from './AddressCol.module.css';

const AddressCol = (props) => {
  return (
    <div className={classes.address_col}>
      <p className={classes.footer_heading}>Contact use</p>
      <address className={classes.contacts}>
        <p className={classes.address}>Carwash Kisumu.</p>
        <p>
          <a className={classes.footer_link} href="tel: +2547183303158">
            +2547183303158
          </a>
          <br />
          <a className={classes.footer_link} href="mailto:hello@dreamtours.com">
            hello@tours.com
          </a>
        </p>
      </address>
    </div>
  );
};

export default AddressCol;

//   <div class="address-col">
//     <p class="footer-heading">Contact use</p>
//     <address class="contacts">
//         <p class="address">
//         Carwash Kisumu.
//         </p>
//         <p>
//         <a class="footer-link" href="tel:415-201-6370">415-201-6370</a><br>
//         <a class="footer-link" href="mailto:hello@dreamtours.com">hello@dreamtours.com</a>
//         </p>
//   </    address>
// </div>
