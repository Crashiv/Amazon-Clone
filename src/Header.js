import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import Logo from "./logo.png";
import { auth } from './firebase';

function Header() {
    const login=()=>{
        if(user){
            auth.signOut();
        }
        
    };
    const [{basket,user},dispatch]=useStateValue();
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={Logo}
                    alt="logo"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionOne">Hello {user?user.email:"Guest"}</span>
                        <span className="header__optionTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Return</span>
                        <span className="header__optionTwo">Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Try</span>
                        <span className="header__optionTwo">Prime!</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionCart">

                        <ShoppingCartIcon />

                        <span className="header__optionTwo header__cartCount">{basket?.length}</span>
                    </div>

                </Link>
            </div>
        </nav>
    )
}

export default Header
