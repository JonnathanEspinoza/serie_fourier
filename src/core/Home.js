import React from 'react';
import Navbar from '../layout/Navbar';
import EgFourier from '../layout/EgFourier';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <EgFourier />
                </div>
            </div>
        </div>
    )
}

export default Home;