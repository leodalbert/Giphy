import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  TextField: {
    minWidth: '400px',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100vw',
    },
    '& .MuiOutlinedInput-adornedEnd ': {
      padding: '0 0',
    },
  },
}));

const SearchField = ({ searchGifs }) => {
  const classes = useStyles();
  const [searchField, setSearchField] = useState('');

  const handleSearch = () => {
    searchField && searchGifs(searchField);
    document.activeElement.blur();
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <Grid item>
        <Paper elevation={5}>
          <TextField
            id='outlined-basic'
            label='Search Giphs...'
            variant='outlined'
            className={classes.TextField}
            value={searchField}
            onSubmit={() => console.loG('clicke')}
            onChange={(e) => setSearchField(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

SearchField.propTypes = {
  searchGifs: PropTypes.func.isRequired,
};

export default SearchField;
