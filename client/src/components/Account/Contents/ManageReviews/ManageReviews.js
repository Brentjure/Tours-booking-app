import { useEffect, useState, useContext } from 'react';

import classes from './ManageReviews.module.css';
import { getAllReviews } from '../../../../lib/api';
import Testimonial from '../../../TestimonialSection/Testimonial';
import useHttps from '../../../../hooks/use-https';
import { deleteReview } from '../../../../lib/api';
import UIContext from '../../../../store/ui-context';
import AuthContext from '../../../../store/auth-context';

const ManageReviews = () => {
  const [page, setPage] = useState(1);
  const UICtx = useContext(UIContext);
  const authCtx = useContext(AuthContext);
  const token = authCtx.user.token;

  const {
    sendRequest,
    status,
    data: reviews,
    error,
  } = useHttps(getAllReviews, false);

  let limit = 5;

  useEffect(() => {
    const loadReviews = () => {
      const query = `page=${page}&limit=${limit}`;
      sendRequest(query);
    };

    loadReviews();
  }, [page, limit, sendRequest]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const deleteReviewHandler = async (reviewId) => {
    try {
      await deleteReview({ reviewId, token });
      UICtx.showNotification({
        status: 'success',
        message: 'Review deleted successfully!',
      });
    } catch (error) {
      UICtx.showNotification({
        status: 'error',
        message: 'Couldnot delete review',
      });
    }
  };

  let content;

  if (status === 'pending')
    content = (
      <div className="centred">
        <p>Loading</p>
      </div>
    );

  if (error) content = <p className="centered focused">{error}</p>;
  if (status === 'completed' && (!reviews || reviews.length === 0))
    content = <p>No Reviews found</p>;
  if (status === 'completed' && reviews)
    content = reviews.map((review, i) => {
      return (
        <div key={i} className={classes.reviews}>
          <Testimonial
            photo={review.user.photo}
            rating={review.rating}
            review={review.review}
            name={review.user.name}
          />
          <div className={classes.tour}>{review.tour.name}</div>
          <div
            className={classes.action}
            onClick={(e) => {
              deleteReviewHandler(review.id);
            }}
          >
            <ion-icon
              className={classes.icon}
              size="meduim"
              name="trash-outline"
            ></ion-icon>
            <p>Delete</p>
          </div>
        </div>
      );
    });

  return (
    <>
      <h1 className="heading-tertiary">Customer Reviews</h1>
      <div>{content}</div>
      <div className={classes.paginate}>
        <button className="button" onClick={prevPage} disabled={page === 1}>
          Prev Page
        </button>
        <button
          className="button"
          disabled={reviews && !reviews.length}
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default ManageReviews;
