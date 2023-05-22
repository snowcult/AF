import React from 'react';
import Card from './Card.jsx';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
const CardList = ({ robots }) => {
  return (
    <Container>
      <Grid container>
        {robots.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Card id={item.id} name={item.name} email={item.email} />;
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
CardList.propTypes = {
  robots: PropTypes.array.isRequired,
};
export default CardList;
