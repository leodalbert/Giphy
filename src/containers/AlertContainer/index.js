import { connect } from 'react-redux';
import Alert from './comonents/Alert';
import { removeAlert } from 'actions/favorites';

const mapStateToProps = (state) => ({
  alert: state.alerts.alert,
});

const mapDispatchToProps = { removeAlert };

const AlertContainer = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertContainer;
