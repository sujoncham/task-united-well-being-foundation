import React from 'react';
import { FaFacebook, FaGithub, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-[50%] lg:w-[50%] w-[100%]">
                    <h1 className="text-5xl font-bold">Contact with us</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <address>
                        <p>street-125</p>
                        <p>House #125</p>
                        <p>NewYork, NY</p>
                    </address>
                    <div className='flex justify-start gap-3 mt-5'>
                        <FaFacebook />
                        <FaLinkedin />
                        <FaGithub />
                        <FaGooglePlusSquare />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                   
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your message</span>
                            </label> 
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message here"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

