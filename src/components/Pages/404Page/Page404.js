import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../../assets/notfound.jpg';

const Page404 = () => {
    const navigate = useNavigate();
    const handleHome = ()=>{
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center p-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={notfound} alt="Page404" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Page 404 Not Found!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                    <button onClick={handleHome} className="btn btn-primary">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;