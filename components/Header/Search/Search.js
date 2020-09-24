import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

const Search = ({
  searchHandler,
  submitHandler,
  inputEl
}) => {
  return (
    <Grid container spacing={8} alignItems="flex-end" justify="center">
      <Grid item className="search-icon-item">
        <Button onClick={submitHandler}> Filter </Button>
      </Grid>
      <Grid item>
        <TextField
          inputRef={inputEl}
          id="search"
          label="Filter"
          type="search"
          onChange={searchHandler}
          onKeyPress={submitHandler}
          margin="normal"
          defaultValue="camper-van"
        />
      </Grid>
    </Grid>
  );
};

export default Search;
