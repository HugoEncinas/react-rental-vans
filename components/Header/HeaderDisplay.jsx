import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'

import Search from './Search'

const HeaderDisplay = ({searchHandler, submitHandler, inputEl}) => {

  return (
    <Container maxWidth="md">
      <Grid>
        <Typography className="title" variant="h3">
          Campervans
        </Typography>
        <Search
          searchHandler={searchHandler}
          submitHandler={submitHandler}
          inputEl={inputEl}
        />
      </Grid>
    </Container>
    
  )
}

export default HeaderDisplay
