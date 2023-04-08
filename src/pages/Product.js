import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Product = () => {
    return (
        <>
            <Navbar/>
            <h1 className='max-w-7xl mx-auto text-center font-black text-3xl'>This is the <span className='text-yellow-700'>Product page</span></h1>
            <Products/>
        </>
    );
};

export default Product;