import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <h1 className='max-w-7xl mx-auto text-center font-black text-3xl'>This is the <span className='text-yellow-700'>Contact Page</span></h1>
        <ContactForm/>
        </>
    );
};

export default Contact;