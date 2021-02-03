import { connect } from 'react-redux';
import Alert from './comonents/Alert';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const AlertContainer = connect(mapStateToProps, mapDispatchToProps)(Alert);

export default AlertContainer;
