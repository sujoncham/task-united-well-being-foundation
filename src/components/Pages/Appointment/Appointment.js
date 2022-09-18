import React from 'react';

const Appointment = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="md:w-[60%] lg:w-[60%] w-[100%]">
                    <div className="overflow-x-auto">
                        <h1 className='text-3xl text-bold mb-5'>Appointment list - (3 Patient)</h1>
                        <table className="table w-full">
                            
                            <thead>
                            <tr>
                                <th>#Sl</th>
                                <th>Name</th>
                                <th>Phone No.</th>
                                <th>Payment</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>+86594520121</td>
                                <td>Paid</td>
                            </tr>
                            
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>+86594520121</td>
                                <td>Paid</td>
                            </tr>
                        
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>+86594520121</td>
                                <td>Paid</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl md:w-[40%] lg:w-[40%] w-[100%]">
                    <figure><img src="../../../assets/profile1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dr. Shankar Roy</h2>
                        <p>Forensic Psychologist</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;