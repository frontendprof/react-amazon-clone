
import React from 'react';

import "./Home.css";
import mainImg from '../../images/main_img.jpg';
import firstBook from "../../images/first_book.jpg"
import alexa from "../../images/amazon_echo.jpg"
import oven from "../../images/oven.jpeg"
import apple from "../../images/ipad_pro.jpg"
import watch from "../../images/watch.jpg"
import monitor from "../../images/monitor.jpg"

import Product from '../Product/Product';


const Home = () => {
    return (
        <div className="home">
            <img src={mainImg} alt="mainImg" className="home__img"/>

            {/* First row */}
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup:How constant innovation creates radically successfull business"
                    price={11.96}
                    rating={5}
                    image={firstBook}
                />

                <Product 
                    id="17321341"
                    title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                    price={999.99}
                    rating={5}
                    image={apple}
                />
            </div>

            {/* Second Row */}
            <div className="home__row">
                <Product 
                    id="12391341"
                    title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
                    price={369.96}
                    rating={3}
                    image={watch}
                />

                <Product 
                    id="12321346"
                    title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
                    price={98.99}
                    rating={4}
                    image={alexa}
                />

                <Product 
                    id="32321341"
                    title="Amazon Smart Oven, a Certified for Humans device – plus Echo Dot"
                    price={249.99}
                    rating={4}
                    image={oven}
                />
                
            </div>


             {/* Third row */}
             <div className="home__row">
                <Product 
                    id="62321341"
                    title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
                    price={1,199.99}
                    rating={5}
                    image={monitor}
                />

            </div>
            
        </div>
    )
}

export default Home
