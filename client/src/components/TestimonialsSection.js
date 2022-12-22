import Testimonial from './Testimonial';
import GalleryItem from './GalleryItem';
import classes from './TestimonialsSection.module.css';

const Testimonials = () => {
  let galleryItems = [];
  galleryItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el) => (
    <GalleryItem />
  ));
  console.log(galleryItems);

  return (
    <section className={classes.section_testimonials}>
      <div className={classes.testimonial_container}>
        <span class="subheading">testimonials</span>
        <h2 class="heading-secondary">We make people genuinely happy!</h2>
        <div className={classes.testimonials}>
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
      <div className={classes.gallery}>{galleryItems}</div>
    </section>
  );
};
export default Testimonials;
