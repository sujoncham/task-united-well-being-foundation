import React from 'react';
import usePsycoHook from '../../hooks/PsychoHook/usePsycoHook';

const Home = () => {
    const [psycho] = usePsycoHook([]);
    return (
        <div className='mb-1'>
            <div className='p-10'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-bold'>Our Psychologist </h1>
                <p className='text-center text-[#f19b1a] text-[18px]'>our service, your happiness</p>
            </div>
            <h1>data: {psycho.length}</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center'>
                { psycho && psycho.map(sycho => <div key={sycho.id} className="card card-compact w-100 bg-base-100 shadow-lg">
                    
                        <img className='w-100 h-100' src={sycho.img} alt="profile-img" />
                     
                    <div className="card-body">
                        
                           <div className='mb-4'>
                                <span className="card-title text-[#f19b1a] text-2xl">{sycho.name}</span>
                                <span>({sycho.education})</span>
                           </div>
                            <p>Experience: {sycho.experience}</p>
                            <p>Speciality: {sycho.speciality}</p>
                            <div className="flex justify-center gap-5 mt-5 mb-5">
                                <button className="btn text-[#f19b1a]">Book Now</button>
                            </div>
                        
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Home;