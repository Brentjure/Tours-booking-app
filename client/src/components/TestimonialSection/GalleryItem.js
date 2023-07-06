import classes from './GalleryItem.module.css';

const GalleryItem = ({ photo }) => {
  return (
    <figure className={classes.gallery_item}>
      <img src={`https://tour-booking-app.netlify.app/${photo}`} alt="tour scenes" />
    </figure>
  );
};
export default GalleryItem;
