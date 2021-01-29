import React from 'react';
import Navbar from '../layout/Navbar';
import DrawFourier from '../layout/DrawFourier';

const Fourier = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <DrawFourier />
                </div>
            </div> 
        </div>
    )
}

export default Fourier;