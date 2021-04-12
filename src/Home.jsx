import React from 'react';
import pic from '../src/images/pic.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home =  ()=>{
    return(
        <>
        <Common title= "Grow your business with"
            btndir="./service"
            btntext = 'Get Started'
        />
        </>
    )
}

export default Home;