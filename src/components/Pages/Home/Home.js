import React from 'react';
import usePsycoHook from '../../hooks/PsychoHook/usePsycoHook';

const Home = () => {
    const [psycho] = usePsycoHook([]);
    return (
        <div>
            <h1>Home Page</h1>
            <h1>data: {psycho.length}</h1>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;