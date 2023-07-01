import classes from './GalleryItem.module.css';

const GalleryItem = ({ photo }) => {
  return (
    <figure className={classes.gallery_item}>
      <img src={`http://127.0.0.1:3000/${photo}`} alt="tour scenes" />
    </figure>
  );
};
export default GalleryItem;
