import { Button, Grid, Card, CardActionArea,  CardMedia,  CardContent, CardActions, Typography} from '@material-ui/core';
import ReactStars from "react-rating-stars-component";
import React from 'react';
import Link from 'next/link'

const Vehicle = ({
  id,
  name,
  image,
  type,
  location,
  pricePerDay,
  rentalScore,
}) => {

  const ratingConfig = {
    size: 30,
    count: 10,
    value: rentalScore*10,
    edit: false
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {type} · {location}
            </Typography>
            <Typography gutterBottom variant="h4" component="h4">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${pricePerDay}
            </Typography>
            <ReactStars {...ratingConfig} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href={`/vehicles/${id}`}>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Vehicle;
