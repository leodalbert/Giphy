import { connect } from 'react-redux';
import Favorites from './components/Favorites';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default FavoritesContainer;
