import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartDropDown from "../cart-dropdown/CartDropDown";
import "./Header-sttyles.scss";
import CartIcon from "../cart-item/CartIcon";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="options" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link to="/sign-in">Sign in </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? <CartDropDown /> : null}
  </div>
);
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
