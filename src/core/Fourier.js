import React, { useEffect } from 'react';

import Navbar from '../layout/Navbar';
import EgFourierSquare from '../layout/EgFourierSquare';

import './Fourier.css';

// CONTEXT
import FourierState from '../context/Fourier/FourierState';

const Fourier = () => {


    return (
        <div>

            <Navbar />

            <FourierState>
                <div className="container">
                    <div className="row">
                        <div className="col s6 m6 l4">
                            <EgFourierSquare />
                        </div>
                    </div>
                </div>
            </FourierState>
        </div>
    )
}

export default Fourier;