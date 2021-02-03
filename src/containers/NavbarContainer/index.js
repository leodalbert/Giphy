import { connect } from 'react-redux';
import Navbar from './comonents/Navbar';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
