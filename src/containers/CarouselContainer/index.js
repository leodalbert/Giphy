import { connect } from 'react-redux';
import Carousel from './components/Carousel';
import { selectTrending } from 'selectors/dashboard';

const mapStateToProps = (state) => ({
  gifs: selectTrending(state),
});

const mapDispatchToProps = {};

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

export default CarouselContainer;
