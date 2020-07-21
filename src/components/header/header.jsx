import React from 'react';

import {
  Nav,
  Navbar,
  NavbarBrand,
  DropdownItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import withRedux from '../../redux';
import config from '../../utils/config';

import profilephoto from '../../assets/images/users/d1.jpg';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';

const Header = (props) => {
  const showMobilemenu = () => {
    document.getElementById('main-wrapper').classList.toggle('show-sidebar');
  };

  const handleToggle = () => {
    document.getElementById('user-dd').classList.toggle('show');
  };
  const handleLogout = () => {
    window.localStorage.removeItem('accessToken');
    props.changeLoggedInFlag(false);
  };

  return (
    <header className='topbar navbarbg' data-navbarbg='skin1'>
      <Navbar className='top-navbar bg-white col' dark expand='md'>
        <div className='navbar-header' id='logobg' data-logobg='skin6'>
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <button
            className='btn-link nav-toggler d-block d-md-none'
            onClick={() => showMobilemenu()}
          >
            <i className='ti-menu ti-close' />
          </button>
          <NavbarBrand href='/'>
            <b className='logo-icon'>
              <img src={logodarkicon} alt='homepage' className='dark-logo' />
              <img src={logolighticon} alt='homepage' className='light-logo' />
            </b>
            {/* <span className='logo-text'>
              <img src={logodarktext} alt='homepage' className='dark-logo' />
              <img src={logolighttext} className='light-logo' alt='homepage' />
            </span> */}
            <b className='text-dark'>
              <tt>{config.APP_NAME}</tt>
            </b>
          </NavbarBrand>
          <div className='col-auto d-block float-right'>
            <button className='btn bg-white' onClick={() => handleToggle()}>
              <i className='ti ti-user'></i>
            </button>
          </div>
        </div>
        <Nav className='ml-auto float-right' navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className='pro-pic'>
              <img
                src={profilephoto}
                alt='user'
                className='rounded-circle'
                width='31'
              />
            </DropdownToggle>
            <DropdownMenu right className='user-dd' id='user-dd'>
              <DropdownItem>
                <i className='ti-settings mr-1 ml-1' /> Settings
              </DropdownItem>
              <DropdownItem onClick={() => handleLogout()}>
                <i className='fa fa-power-off mr-1 ml-1' /> Logout
              </DropdownItem>
              <DropdownItem divider />
              <Button color='success' className='btn-rounded ml-3 mb-2 mt-2'>
                View Profile
              </Button>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/*--------------------------------------------------------------------------------*/}
          {/* End Profile Dropdown                                                           */}
          {/*--------------------------------------------------------------------------------*/}
        </Nav>
      </Navbar>
    </header>
  );
};
export default withRedux(Header);
