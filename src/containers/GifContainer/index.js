import { connect } from 'react-redux';
import Gif from './components/Gif';
import { addFave, removeFave } from 'actions/favorites';
import { makeSelectFaveIds } from 'selectors/favorites';

const mapStateToProps = (state) => ({
  faveIds: makeSelectFaveIds(state),
});

const mapDispatchToProps = { addFave, removeFave };

const GifContainer = connect(mapStateToProps, mapDispatchToProps)(Gif);

export default GifContainer;
