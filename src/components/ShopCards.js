import React from 'react';
import ShopItem from './ShopItems'
import './ShopCards.css';

function ShopCards() {
    return (
       <div className="shop-card-container">
            <div className="shop-card-wrapper">
                <ul className="shop-card-items">
                    <ShopItem src="/images/shop_images/hoodie.jpg" name="JOURNEY Unisex Hoodie" price="$24.99"/>
                    <ShopItem src="/images/shop_images/t-shirt.jpg" name="JOURNEY Unisex T-Shirt" price="$19.99"/>
                    <ShopItem src="/images/shop_images/mug.jpg" name="JOURNEY White Ceramic Mug" price="$14.99"/>
                </ul>

                <ul className="shop-card-items">
                    <ShopItem src="/images/shop_images/cap.jpg" name="JOURNEY Baseball Cap" price="$17.99"/>
                    <ShopItem src="/images/shop_images/coming_soon.jpg" name="JOURNEY Die-Cut Stickers" price="$9.99"/>
                    <ShopItem src="/images/shop_images/coming_soon.jpg" name="JOURNEY Gray Sweatpants" price="$21.99"/>
                </ul>
            </div>
       </div>
    )
}

export default ShopCards;