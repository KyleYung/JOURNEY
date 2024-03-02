import React from 'react';
import './ShopCards.css'

function ShopItems(props) {
    return (
            <li className="shop-card">
                <img className="shop-card-image" src={props.src} alt=""></img>
                <div className="shop-card-info">
                    <h5 className="shop-card-text">{props.name}</h5>
                    <h6 className="shop-card-text">{props.price}</h6>
                </div>
            </li>
    )
}

export default ShopItems;