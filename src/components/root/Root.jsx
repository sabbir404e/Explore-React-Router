import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Header></Header> 
            <div className='root-main'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;