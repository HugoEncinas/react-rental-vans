import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import Vehicle from './Vehicle'

const RentalListDisplay = ({rentalList}) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {rentalList.map((item)=>(
          <Vehicle
            key={item.id}
            id={item.id}
            name={item.attributes.name}
            image={item.attributes.primary_image_url}
            type={item.attributes.display_vehicle_type}
            location={`${item.attributes.location.city}, ${item.attributes.location.state}`}
            pricePerDay={item.attributes.price_per_day}
            rentalScore={item.attributes.rental_score}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default RentalListDisplay
