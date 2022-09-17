import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
            <div>
                <span className="footer-title">Services</span> 
                <Link className="link link-hover">Surgery</Link>
                <Link className="link link-hover">Medicine</Link>
                <Link className="link link-hover">Hematology</Link>
                <Link className="link link-hover">Pathology</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Customer care</Link>
                <Link className="link link-hover">Social welfaire</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;