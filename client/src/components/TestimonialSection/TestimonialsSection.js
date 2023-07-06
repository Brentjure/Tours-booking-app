import Testimonial from './Testimonial';
import GalleryItem from './GalleryItem';
import classes from './TestimonialsSection.module.css';

const photos = [
  'tour-1-12.jpg',
  'tour-1-1.jpeg',
  'tour-1-13.jpeg',
  'tour-1-3.jpeg',
  'tour-1-4.jpg',
  'tour-1-5.jpeg',
  'tour-1-6.jpg',
  'tour-1-14.jpeg',
  'tour-1-8.jpg',
  'tour-1-11.jpeg',
  'tour-1-9.jpeg',
  'tour-1-10.jpeg',
];

const Testimonials = ({ reviews }) => {
  let galleryItems = [];
  let content;
  galleryItems = photos.map((el, i) => <GalleryItem key={i} photo={el} />);

  if (reviews)
    content = reviews.map((review, i) => (
      <Testimonial
        key={i}
        photo={review.user.photo}
        rating={review.rating}
        review={review.review}
        name={review.user.name}
      />
    ));

  return (
    <section className={classes.section_testimonials}>
      <div className={classes.testimonial_container}>
        <span className="subheading">testimonials</span>
        <h2 className="heading-secondary">We make people genuinely happy!</h2>
        <div className={classes.testimonials}>{content}</div>
      </div>
      <div className={classes.gallery}>{galleryItems}</div>
    </section>
  );
};
export default Testimonials;
