import { useRef } from 'react';

import classes from './FilterContainer.module.css';

const FilterContainer = ({ filterTours, status }) => {
  const nameInputRef = useRef();
  const priceInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const price = priceInputRef.current.value;

    const q = `search=${name}&price[lte]=${price}`;

    filterTours(q);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="name">Search your Tour:</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Where are you going?"
          ref={nameInputRef}
        />
      </div>
      <div>
        <label htmlFor="price">What's your budget? (Max-price):</label>
        <input
          type="Number"
          name=""
          id="price"
          placeholder="What's your budget? (Max-price)"
          ref={priceInputRef}
        />
      </div>

      <button className="button btn--form">
        {status === 'pending' ? 'Loading' : 'search'}
      </button>
    </form>
  );
};

export default FilterContainer;
