import React from 'react';
import usePsycoHook from '../../hooks/PsychoHook/usePsycoHook';

const Home = () => {
    const [psycho] = usePsycoHook([]);
    return (
        <div>
            <h1>Home Page</h1>
            <h1>data: {psycho.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                { psycho && psycho.map(sycho => <div key={sycho.id} className="card card-compact w-56 bg-base-100 shadow-xl">
                    <figure><img className='w-100 h-56' src={sycho.img} alt="profile-img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Home;