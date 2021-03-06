import React from 'react';
import { NavLink } from "react-router-dom";
import Card from './Card';
import Sdata from './Sdata';

const Service =  ()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Sdata.map((val,ind,arr)=> <Card value={val.title} image={val.imgsrc} key={ind}/> )}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;