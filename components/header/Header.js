import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header-sttyles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      
      {currentUser?<div className="options" onClick={()=>auth.signOut()}>Sign out</div>:<Link to="/sign-in">Sign in </Link>}
    </div>
  </div>
);

export default Header;