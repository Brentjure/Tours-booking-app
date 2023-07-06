export const createFormData = (
  enteredTour,
  enteredLocations,
  startDates,
  enteredImageCover,
  images
) => {
  let form = new FormData();

  for (let key in enteredTour) {
    if (typeof enteredTour[key] === 'object') {
      for (let subkey in enteredTour[key]) {
        if (typeof enteredTour[key][subkey] === 'string') {
          form.append(`${key}.${subkey}`, enteredTour[key][subkey]);
        } else {
          enteredTour[key][subkey].forEach((el, index) => {
            form.append(`${key}[${subkey}][${index}]`, el);
          });
        }
      }
    } else {
      form.append(key, enteredTour[key]);
    }
  }
  if (enteredLocations)
    enteredLocations.forEach((el, index) => {
      for (let key in el) {
        if (typeof el[key] === 'string') {
          form.append(`locations[${index}][${key}]`, el[key]);
        } else {
          el[key].forEach((element, i) => {
            form.append(`locations[${index}][${key}][${i}]`, element);
          });
        }
      }
    });

  if (startDates)
    startDates.forEach((el, i) => {
      form.append(`startDates[${i}]`, el);
    });

  form.append('imageCover', enteredImageCover);
  images.forEach((el, i) => {
    form.append(`images`, el);
  });

  // for (const pair of form.entries()) {
  //   console.log(pair[0] + ': ' + pair[1]);
  // }
  return form;
};
