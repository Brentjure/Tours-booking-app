import { useState, useRef } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import Select from 'react-select';

import classes from './TourForm.module.css';
import { createFormData } from '../../../../lib/createFormData';

let tourGuides;

const TourForm = ({
  tour,
  editTour,
  createTour,
  guidesOptns,
  leadGuidesOptns,
  editStatus,
  createTourStatus,
}) => {
  const [locations, setLocations] = useState([
    {
      address: '',
      description: '',
      lat: '',
      long: '',
    },
  ]);
  const [enteredImageCover, setEnteredImageCover] = useState();
  const [enteredImage1, setEnteredImage1] = useState();
  const [enteredImage2, setEnteredImage2] = useState();
  const [enteredImage3, setEnteredImage3] = useState();
  const [startDates, setStartDates] = useState(['']);
  const [guides, setGuides] = useState([]);
  const [leadGuide, setLeadGuide] = useState();

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

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const enteredLocations = locations.map((el) => ({
      type: 'Point',
      coordinates: [el.long, el.lat],
      description: el.description,
      address: el.address,
    }));

    tourGuides = [...guides, leadGuide].map((el) => (el ? el.value : ''));

    if (tour) {
      const enteredTour = {
        name: nameInputRef.current.value,
        duration: durationInputRef.current.value,
        maxGroupSize: groupSizeInputRef.current.value,
        difficulty: difficultyInputRef.current.value,
        price: priceInputRef.current.value,
        priceDiscount: priceDiscountInputRef.current.value,
        summary: summaryInputRef.current.value,
        description: descriptionInputRef.current.value,
        guides: tourGuides,
      };

      let images = [
        enteredImage1 ? enteredImage1 : tour.images[0],
        enteredImage1 ? enteredImage1 : tour.images[1],
        enteredImage1 ? enteredImage1 : tour.images[2],
      ];

      let imgCover = enteredImageCover;
      if (!enteredImageCover) imgCover = tour.imageCover;

      const form = createFormData(enteredTour, null, null, imgCover, images);
      editTour(form);
    } else {
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
        guides: tourGuides,
      };

      const images = [enteredImage1, enteredImage2, enteredImage3];

      const form = createFormData(
        enteredTour,
        enteredLocations,
        startDates,
        enteredImageCover,
        images
      );
      createTour(form);
    }
  };

  const tourStops = tour ? tour.locations : locations;

  const tourLocations = tourStops.map((input, index) => (
    <div key={index} className={classes.locations}>
      <input
        name="address"
        placeholder="address"
        value={input.address}
        defaultValue={tour ? `${input.address}` : ''}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="description"
        placeholder="description"
        value={input.description}
        defaultValue={tour ? `${input.description}` : ''}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="lat"
        placeholder="lat"
        value={input.lat}
        defaultValue={tour ? `${input.coordinates[1]}` : ''}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <input
        name="long"
        placeholder="long"
        value={input.long}
        defaultValue={tour ? `${input.coordinates[0]}` : ''}
        onChange={(event) => InputChangeHandler(index, event)}
      />
      <button onClick={() => removeLocation(index)}>Remove.</button>
    </div>
  ));

  const startDate = tour ? tour.startDates : startDates;

  const dates = startDate.map((input, index) => {
    const date = new Date(input);
    const getYear = date.toLocaleString('default', { year: 'numeric' });
    const getMonth = date.toLocaleString('default', { month: '2-digit' });
    const getDay = date.toLocaleString('default', { day: '2-digit' });
    const dateFormat = getYear + '-' + getMonth + '-' + getDay;

    return (
      <div key={index}>
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          placeholder=""
          value={input}
          defaultValue={tour ? `${dateFormat}` : ''}
          onChange={(event) => startDatesInputChangeHandler(index, event)}
        />
        <button onClick={() => removeStartDate(index)}>Remove.</button>
      </div>
    );
  });

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.details}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            placeholder="name"
            // placeholder={tour ? `${tour.name}` : 'name'}
            defaultValue={tour ? `${tour.name}` : ''}
          />
        </div>
        {!tour && <div>{dates}</div>}
        {!tour && (
          <span className={classes.toggleLocation} onClick={addstartDate}>
            <IoAddOutline className={classes.addTourIcon} />
            Add start date...
          </span>
        )}
        <div>
          <label htmlFor="difficut">Duration</label>
          <input
            type="number"
            id="duration"
            placeholder="duration"
            defaultValue={tour ? `${tour.duration}` : ''}
            ref={durationInputRef}
          />
        </div>

        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            ref={difficultyInputRef}
            defaultValue={tour ? `${tour.difficulty}` : ''}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        {leadGuidesOptns && (
          <div>
            <label htmlFor="lead-guide">Lead Guide:</label>
            <Select
              defaultValue={[leadGuidesOptns[1]]}
              // isMulti
              name="lead-guide"
              options={leadGuidesOptns}
              className="basic-select"
              classNamePrefix="select"
              onChange={(e) => {
                setLeadGuide(e);
              }}
            />
          </div>
        )}
        {guidesOptns && (
          <div>
            <label htmlFor="guides">Tour Guides (Atleast 3):</label>
            <Select
              defaultValue={[guidesOptns[1]]}
              isMulti
              name="guides"
              options={guidesOptns}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => {
                setGuides(e);
              }}
            />
          </div>
        )}

        <div>
          <label htmlFor="group-size">Group Size</label>
          <input
            type="number"
            id="group-size"
            placeholder="Maximum group Size"
            defaultValue={tour ? `${tour.maxGroupSize}` : ''}
            ref={groupSizeInputRef}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="price"
            defaultValue={tour ? `${tour.price}` : ''}
            ref={priceInputRef}
          />
        </div>
        <div>
          <label htmlFor="price-discount">Price Discount</label>
          <input
            type="number"
            id="price-discount"
            placeholder="Price Discount"
            defaultValue={tour ? `${tour.priceDiscount}` : ''}
            ref={priceDiscountInputRef}
          />
        </div>
        <div>
          <label htmlFor="imageCover">Cover Image:</label>
          <input
            type="file"
            id="imageCover"
            placeholder="cover photo"
            // defaultValue={tour ? `${tour.imageCover}` : ''}
            // value={enteredImageCover}
            onChange={(e) => {
              setEnteredImageCover(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <label htmlFor="image1">Image:</label>
          <input
            type="file"
            id="image1"
            placeholder=""
            onChange={(e) => {
              setEnteredImage1(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <label htmlFor="image2">Image:</label>
          <input
            type="file"
            id="image2"
            placeholder=""
            onChange={(e) => {
              setEnteredImage2(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <label htmlFor="image3">Image:</label>
          <input
            type="file"
            id="image3"
            placeholder=""
            onChange={(e) => {
              setEnteredImage3(e.target.files[0]);
            }}
          />
        </div>
      </div>
      {!tour && <p className="heading-tertiary">Start Location:</p>}
      {!tour && (
        <div className={classes.locations}>
          <input
            type="text"
            id="address"
            placeholder="adress"
            defaultValue={tour ? `${tour.startLocation.address}` : ''}
            ref={startLocationAddressInputRef}
          />
          <input
            type="text"
            id="description"
            placeholder="description"
            defaultValue={tour ? `${tour.startLocation.description}` : ''}
            ref={startLocationDescriptionInputRef}
          />
          <input
            type="number"
            id="latitude"
            placeholder="latitude"
            ref={startLocationLatInputRef}
            defaultValue={tour ? `${tour.startLocation.coordinates[1]}` : ''}
          />
          <input
            type="number"
            id="longitude"
            placeholder="Longitude"
            ref={startLocationLongInputRef}
            defaultValue={tour ? `${tour.startLocation.coordinates[0]}` : ''}
          />
        </div>
      )}

      {!tour && <p className="heading-tertiary">Tour Location(s):</p>}
      {!tour && tourLocations}
      {!tour && (
        <span className={classes.toggleLocation} onClick={addLocations}>
          <IoAddOutline className={classes.addTourIcon} />
          Add Location...
        </span>
      )}
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea
          id="text"
          rows="5"
          ref={summaryInputRef}
          defaultValue={tour ? `${tour.summary}` : ''}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="text"
          rows="5"
          ref={descriptionInputRef}
          defaultValue={tour ? `${tour.description}` : ''}
        ></textarea>
      </div>
      <div className={classes.btn_form}>
        {tour && (
          <button className="button" type="submit" onClick={submitFormHandler}>
            {editStatus === 'pending' ? 'Loading' : 'Edit Tour'}
          </button>
        )}
        {!tour && (
          <button className="button" type="submit" onClick={submitFormHandler}>
            {createTourStatus === 'pending' ? 'Loading' : 'Add Tour'}
          </button>
        )}
      </div>
    </form>
  );
};

export default TourForm;
