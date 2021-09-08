import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
// import s from './Rating.module.scss';

const StyledRating = withStyles({
  iconFilled: {
    color: '#3d71c0',
  },
  iconHover: {
    color: '#1C62CD',
  },
})(Rating);


function RatingPage() {
  const [value, setValue] = useState(4);
  return (
    <StyledRating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
  );
}

export default RatingPage;


