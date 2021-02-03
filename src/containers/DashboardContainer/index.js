import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getTrending, searchGifs } from 'actions/dashboad';
import { addFave } from 'actions/favorites';
import {
  selectDashboardLoading,
  selectSearchResults,
} from 'selectors/dashboard';

const mapStateToProps = (state) => ({
  loading: selectDashboardLoading(state),
  searchResults: selectSearchResults(state),
});

const mapDispatchToProps = { getTrending, searchGifs, addFave };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
