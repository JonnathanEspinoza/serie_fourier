import React from 'react';
import Navbar from '../layout/Navbar';

import unnamed from '../img/unnamed.png';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <img src={unnamed}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Home;