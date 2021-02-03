import { connect } from 'react-redux';
import Favorites from './components/Favorites';
import { selectFavoriteGifs, selectFavoriteLoading } from 'selectors/favorites';
import { getFaves } from 'actions/favorites';

const mapStateToProps = (state) => ({
  gifs: selectFavoriteGifs(state),
  loading: selectFavoriteLoading(state),
});

const mapDispatchToProps = { getFaves };

const FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default FavoritesContainer;
