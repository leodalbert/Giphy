import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
