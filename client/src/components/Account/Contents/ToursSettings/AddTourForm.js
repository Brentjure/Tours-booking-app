import { useState, useRef, useContext } from 'react';
import { IoAddOutline } from 'react-icons/io5';

import classes from './AddTourForm.module.css';
import { getAllUsers, addTour } from '../../../../lib/api';
import AuthContext from '../../../../store/auth-context';

let leadGuides;
let guides;

const AddTourForm = (props) => {
  const [locations, setLocations] = useState([
    {
      address: '',
      description: '',
      lat: '',
      long: '',
    },
  ]);

  const [startDates, setStartDates] = useState(['']);

  const token = useContext(AuthContext).user.token;
  const fetchLeadGuides = async () => {
    try {
      const users = getAllUsers({
        params: '?role=lead-guide',
        token: token,
      }).then((results) => {
        return results;
      });
      return users;
    } catch (error) {
      console.log(error);
    }
  };

  leadGuides = fetchLeadGuides();
  guides = getAllUsers({ params: '?role=guide', token: token });
  // guides.then((result) => result);

  console.log({ leadGuides, guides });
  console.log(leadGuides);

  const nameInputRef = useRef();
  const durationInputRef = useRef();
  const groupSizeInputRef = useRef();
  const difficultyInputRef = useRef();
  const priceInputRef = useRef();
  const priceDiscountInputRef = useRef();
  const summaryInputRef = useRef();
  const descriptionInputRef = useRef();
  const startLocationAddressInputRef = useRef();
  const startLocationDescriptionInputRef = useRef();
  const startLocationLatInputRef = useRef();
  const startLocationLongInputRef = useRef();
  const guidesInputRef = useRef();

  const InputChangeHandler = (index, e) => {
    let data = [...locations];
    data[index][e.target.name] = e.target.value;
    setLocations(data);
  };

  const startDatesInputChangeHandler = (index, e) => {
    let data = [...startDates];
    data[index] = e.target.value;
    setStartDates(data);
  };

  const addLocations = () => {
    let newLocation = {
      address: '',
      description: '',
      lat: '',
      long: '',
    };

    setLocations([...locations, newLocation]);
  };
  const addstartDate = () => {
    let newstartDate = { date: '' };

    setStartDates([...startDates, newstartDate]);
  };

  const removeLocation = (index) => {
    let data = [...locations];
    data.splice(index, 1);
    setLocations(data);
  };
  const removeStartDate = (index) => {
    let data = [...startDates];
    data.splice(index, 1);
    setStartDates(data);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredLocations = locations.map((el) => ({
      type: 'Point',
      coordinates: [el.long, el.lat],
      description: el.description,
      address: el.address,
    }));

    const enteredTour = {
      startLocation: {
        type: 'Point',
        coordinates: [
          startLocationLongInputRef.current.value,
          startLocationLatInputRef.current.value,
        ],
        description: startLocationDescriptionInputRef.current.value,
        address: startLocationAddressInputRef.current.value,
      },
      name: nameInputRef.current.value,
      duration: durationInputRef.current.value,
      maxGroupSize: groupSizeInputRef.current.value,
      difficulty: difficultyInputRef.current.value,
      price: priceInputRef.current.value,
      priceDiscount: priceDiscountInputRef.current.value,
      summary: summaryInputRef.current.value,
      description: descriptionInputRef.current.value,
      startDates: startDates,
      locations: enteredLocations,
    };
    console.log(enteredTour);

    addTour({ enteredTour, token });
  };

  const tourLocations = locations.map((input, index) => (
    <div key={index} className={classes.locations}>
      <input
        name="address"
        placeholder="address"
        value={input.address}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="description"
        placeholder="description"
        value={input.description}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="lat"
        placeholder="lat"
        value={input.lat}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="long"
        placeholder="long"
        value={input.long}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <button onClick={() => removeLocation(index)}>Remove.</button>
    </div>
  ));

  const dates = startDates.map((input, index) => (
    <div>
      <label for="start-date">Start Date</label>
      <input
        type="date"
        id="start-date"
        placeholder=""
        value={input}
        onChange={(event) => startDatesInputChangeHandler(index, event)}
      />
      <button onClick={() => removeStartDate(index)}>Remove.</button>
    </div>
  ));

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.details}>
        <div>
          <label for="name">Name</label>
          <input ref={nameInputRef} type="text" id="name" placeholder="name" />
        </div>
        <div>{dates}</div>
        <span className={classes.toggleLocation} onClick={addstartDate}>
          <IoAddOutline className={classes.addTourIcon} />
          Add start date...
        </span>
        <div>
          <label for="difficut">Duration</label>
          <input
            type="number"
            id="duration"
            placeholder="duration"
            ref={durationInputRef}
          />
        </div>

        <div>
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" ref={difficultyInputRef}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div>
          <label for="guides">Tour Guides</label>
          <select name="guides" id="guides" multiple ref={guidesInputRef}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div>
          <label for="group-size">Group Size</label>
          <input
            type="number"
            id="group-size"
            placeholder="Size"
            ref={groupSizeInputRef}
          />
        </div>
        <div>
          <label for="price">Price</label>
          <input type="number" id="price" placeholder="" ref={priceInputRef} />
        </div>
        <div>
          <label for="price-discount">Price Discount</label>
          <input
            type="number"
            id="price-discount"
            placeholder=""
            ref={priceDiscountInputRef}
          />
        </div>
      </div>
      <p className="heading-tertiary">Start Location(s):</p>
      <div className={classes.locations}>
        <input
          type="text"
          id="address"
          placeholder="adress"
          ref={startLocationAddressInputRef}
        />
        <input
          type="text"
          id="description"
          placeholder="description"
          ref={startLocationDescriptionInputRef}
        />
        <input
          type="number"
          id="latitude"
          placeholder="latitude"
          ref={startLocationLatInputRef}
        />
        <input
          type="number"
          id="longitude"
          placeholder="Longitude"
          ref={startLocationLongInputRef}
        />
      </div>

      <p className="heading-tertiary">Tour Location(s):</p>
      {tourLocations}
      <span className={classes.toggleLocation} onClick={addLocations}>
        <IoAddOutline className={classes.addTourIcon} />
        Add Location...
      </span>
      <div>
        <label for="summary">Summary</label>
        <textarea id="text" rows="5" ref={summaryInputRef}></textarea>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="text" rows="5" ref={descriptionInputRef}></textarea>
      </div>
      <div className={classes.btn_form}>
        <button className={'btn'} type="submit" onClick={submitFormHandler}>
          Add Tour
        </button>
      </div>
    </form>
  );
};

export default AddTourForm;
