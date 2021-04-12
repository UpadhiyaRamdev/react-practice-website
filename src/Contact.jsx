import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message: ""
    })
    const inputEvent=(event)=>{
        const {name, value} = event.target;

        setData((prevVal)=>{
            return {
                ...prevVal,
                [name]: value,
            };
        });
    }
    const disp =(e)=>{
        e.preventDefault();
        alert(`my entered name is ${data.fullname} and my number is ${data.phone} and my email is ${data.email} and my message is ${data.message}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={disp}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" 
                            className="form-control" 
                            name="fullname"
                            value={data.fullname}
                            onChange={inputEvent}
                            id="exampleFormControlInput1" 
                            placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                            <input type="number" 
                            className="form-control" 
                            name="phone"
                            value={data.phone}
                            onChange={inputEvent}
                            id="exampleFormControlInput1" 
                            placeholder="Mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            name="email"
                            value={data.email}
                            onChange={inputEvent}
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com" />
                        </div>
                        
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Enter message</label>
                            <textarea className="form-control" 
                            name="message"
                            value={data.message}
                            onChange={inputEvent}
                            id="Message" 
                            rows="3"></textarea>
                        </div>
                            <div class="col-12">
                                <button className="btn btn-outline-primary" 
                                type="submit">Submit form</button>
                            </div>
                            </form>
                        </div>
                    
                </div>

            </div>
        </>
    )
}

export default Contact;