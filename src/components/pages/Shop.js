import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ShopCards from '../ShopCards'

export default function Shop() {
    return (
        <>
            <h1 className="shop">Shop</h1>
            <ShopCards />
            <Footer />
        </>
    )
}