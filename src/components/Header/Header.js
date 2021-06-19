
import React from 'react';

import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import amazonImg from "../../images/amazon_img.png";

import "./Header.css";
import { useStateValue } from '../../contextAPI/StateProvider';




const Header = () => {
    
    const [{basket},dispatch]=useStateValue();
    console.log(basket);
    return (
        <nav className="header">

            {/* Logo icon */}
            <Link to="/">
            
                <img 
                    className="header__logo" 
                    src={amazonImg} 
                    alt="amazonIcon"
                />
            </Link>


            {/* Input search */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* Links */}

            {/* 1st link */}
            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello AbdulMalik</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>             

        

            {/* 2nd link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

           

            {/* 3rd link */}                

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>


                {/* 4th link */}
                <Link to="checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                
                </Link>

           </div>

        </nav>
    )
}

export default Header
