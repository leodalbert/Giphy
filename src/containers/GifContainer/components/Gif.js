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

const isFave = (faveIds, id) => {
  return faveIds.some((faveId) => faveId === id);
};

const Gif = ({
  gif,
  gif: {
    id,
    fixed_height: { url, height, width },
  },
  faveIds,
  removeFave,
  addFave,
}) => {
  //   const classes = useStyles();
  const handleClick = () => {
    if (!isFave(faveIds, id)) {
      addFave(gif);
    } else {
      removeFave(id);
    }
  };

  return (
    <Card
      raised
      style={{ height: height + 'px', width: width + 'px' }}
      onClick={handleClick}>
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

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
};

export default Gif;
