import React from 'react'
import banner from "./banner.jpg";
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://m.media-amazon.com/images/I/61h7CZbj6VL._SX3000_.jpg"
                alt=""
            />

            {/*Products id title price rating image  */}
            <div className="home__row">
                <Product
                    id={12345}
                    title="Wings of Fire: An Autobiography of Abdul Kalam"
                    price={247}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg"
                />
                <Product
                    id={12345}
                    title="AMD 5000 Series Ryzen 9 5950X Desktop Processor 16 Cores 32 Threads 72 MB Cache "
                    price={77500.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/616VM20+AzL._SL1384_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id={12345}
                    title="HP OMEN 15.6-inch (39.62 cms) FHD Gaming Laptop (Ryzen 5-4600H/8GB/512GB SSD/Windows 10/NVIDIA GTX 1660ti 6GB/Shadow Black/2.36 kg), 15-en0002AX"
                    price={92300.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71dG2zTOI6L._SL1500_.jpg"
                />
                <Product
                    id={12345}
                    title="American Tourister Casual Backpack"
                    price={999.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71+y6w3PG1L._UL1500_.jpg"
                />
                <Product
                    id={12345}
                    title="Xiaomi Mi Smart Band 6, 50% Larger 1.56 AMOLED Screen, SpO2 Tracking, Continuous HR, Stress and Sleep Monitoring, 30 Sports Modes, PAI, Women's Health, Quick Replies, 5ATM Water Resistant, Black"
                    price={3499.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61UugubmHTL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id={12345}
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={160000.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
