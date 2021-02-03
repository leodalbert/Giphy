import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import { getTrending } from 'actions/dashboad';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getTrending };

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
