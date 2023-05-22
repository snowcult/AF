import React from 'react';
import PropTypes from 'prop-types';
import Cards from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { keyframes } from '@mui/material';

const fadeIn = keyframes(`
0%{
transform:scale(1.2)
}
100%{
transform:scale(1)
}
`);
const Card = function ({ id, email, name }) {
  return (
    <Cards
      sx={{
        backgroundColor: purple[800] + '30',
        margin: 1,
        animation: `${fadeIn} 0.5s ease`,
        '&:hover': {
          backgroundColor: purple[900] + '70',
        },
      }}
      className="shadow-3"
    >
      <CardContent>
        <CardMedia
          sx={{
            maxWidth: '220px',
            maxHeight: '220px',
            margin: '0 auto',
          }}
        >
          <img
            src={`https://robohash.org/${id}?size=220x220&set=set2`}
            alt="robot"
          />
        </CardMedia>
        <Typography variant="subitle" color="white">
          <h2>{name}</h2>
        </Typography>
        <Typography sx={{ mb: 1.8, color: 'green' }} variant="body1">
          <p>{email}</p>
        </Typography>
      </CardContent>
    </Cards>
  );
};
Card.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
export default Card;
