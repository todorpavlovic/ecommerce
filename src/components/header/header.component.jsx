import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({currentUser, hidden}) => {
   console.log(hidden)


    return (
        <header className="header">
            <Link className="logo-container" to="/">
            <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                { currentUser ? (
                    <div style={{cursor:'pointer'}} className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (<Link to="/signin">SIGN IN</Link>) }
                <CartIcon />
            </div>
            {
                hidden ? null : (<CartDropdown />)
            }
            
        </header>
    )
}

const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
