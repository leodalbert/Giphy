import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

// const useStyles = makeStyles({
//   //   root: {
//   //     maxHeight: 200,
//   //     maxWidth: 274,
//   //   },
// });

const GifSmall = ({
  gif: {
    fixed_height: { url, height, width },
  },
}) => {
  //   const classes = useStyles();

  return (
    <Card raised style={{ height: height + 'px', width: width + 'px' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          //   className={classes.media}
          src={url}
          title='test'
        />
      </CardActionArea>
    </Card>
  );
};

GifSmall.propTypes = {
  gif: PropTypes.object.isRequired,
};

export default GifSmall;
