import React from 'react'
import ReactStars from "react-rating-stars-component";
import Link from 'next/link'
import { Container, Button, Grid, Fab, Card, CardActionArea,  CardMedia,  CardContent, Typography, Hidden } from '@material-ui/core';

const FullDetailDisplay = ({vehicleInfo: {
    attributes: {
      display_vehicle_type: type,
      name,
      location: {
        city,
        state
      },
      price_per_day: pricePerDay,
      rental_score: rentalScore,
    }
  }, primaryImgURL}) => {

  const ratingConfig = {
    size: 30,
    count: 10,
    value: rentalScore*10,
    edit: false
  };

  return (
    <Container maxWidth="md">
      <Link href={`/`}>
        <a>
          <Button size="small" color="primary">
            Go Back
          </Button>
        </a>
      </Link>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CardMedia 
                  className='full-detail-image'
                  component="img"
                  alt={name}
                  height="140"
                  image={primaryImgURL}
                  title={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Hidden xsDown>
                  <CardMedia
                    className='full-detail-image'
                    component="img"
                    alt={name}
                    height="140"
                    image={primaryImgURL}
                    title={name}
                  />
                </Hidden>
              </Grid>
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {type} · {`${city}, ${state}`}
              </Typography>
              <Typography gutterBottom variant="h4" component="h4">
                {name}
              </Typography>
              <Fab variant="extended" color="primary"> 
                ${pricePerDay}
              </Fab>
              <ReactStars {...ratingConfig} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  )
}

export default FullDetailDisplay
