import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import Logo from "./logo.png";

function Header() {
    const [{basket},dispatch]=useStateValue();
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

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Hello Shivam</span>
                        <span className="header__optionTwo">Sign In</span>
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

                <Link to="/checkout" className="checkout header__link">
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
