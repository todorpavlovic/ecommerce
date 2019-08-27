import React from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = ({ currentUser }) => {
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
            </div>
        </header>
    )
}

export default Header
