import classes from './GalleryItem.module.css';
import photo from '../images/tour-1-1.jpg';

const GalleryItem = () => {
  return (
    <figure className={classes.gallery_item}>
      <img src={photo} alt="tour scenes" />
    </figure>
  );
};
export default GalleryItem;
