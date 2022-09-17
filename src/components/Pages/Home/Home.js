import React from 'react';
import usePsycoHook from '../../hooks/PsychoHook/usePsycoHook';

const Home = () => {
    const [psycho] = usePsycoHook([]);
    return (
        <div>
            <h1 className='text-5xl text-center font-bold p-10'>Our Psychologist </h1>
            <h1>data: {psycho.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center'>
                { psycho && psycho.map(sycho => <div key={sycho.id} className="card card-compact w-100 bg-base-100 shadow-xl">
                    <figure><img className='w-100 h-56' src={sycho.img} alt="profile-img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{sycho.name}</h2>
                        <p>Education: {sycho.education}</p>
                        <p>Experience: {sycho.experience}</p>
                        <p>Speciality: {sycho.speciality}</p>
                        <div className="card-actions justify-center">
                        <button className="btn btn-primary">Book Now</button>
                        <button className="btn btn-primary">see details</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Home;