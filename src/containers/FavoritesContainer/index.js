import { connect } from 'react-redux';
import Favorites from './components/Favorites';
import { selectFavoriteGifs, selectFavoriteLoading } from 'selectors/favorites';

const mapStateToProps = (state) => ({
  gifs: selectFavoriteGifs(state),
  loading: selectFavoriteLoading(state),
});

const mapDispatchToProps = {};

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default FavoritesContainer;
