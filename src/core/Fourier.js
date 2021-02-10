import React from 'react';

import Navbar from '../layout/Navbar';
import ManipuleFourier from '../layout/ManipuleFourier';
import DrawFourier from '../layout/DrawFourier';
import EgFourier from '../layout/EgFourier';

// CONTEXT
import FourierState from '../context/Fourier/FourierState';

const Fourier = () => {
    return (
        <div>
            
            <Navbar />

            <FourierState>
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <div className="col s6">
                            <ManipuleFourier />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <EgFourier />
                        </div>
                    </div>
                </div>
            </FourierState>
        </div>
    )
}

export default Fourier;