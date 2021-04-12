import React from 'react';
import pic from '../src/images/pic.png';
import {NavLink} from 'react-router-dom';

const Common =  (props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row mt-lg-5">
                        <div className="col-10 mx-auto">
                        <div className="row mt-lg-5">
                        <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                            <h1>{props.title} <strong className="brand-color">Ramdev Upadhiya</strong></h1>
                            <h2>we are the team of Talented web developers</h2>
                            <div className='mt-3'>
                                <NavLink to={props.btndir} className="btngetstarted">{props.btntext}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src ={pic} className="animated-img" alt="hero-img"/>
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>

        </section>
        </>
    )
}

export default Common;