
import React from 'react';

import "./Home.css";
import mainImg from '../../images/main_img.jpg';


const Home = () => {
    return (
        <div className="home">
            <img src={mainImg} alt="mainImg" className="home__img"/>
        </div>
    )
}

export default Home
