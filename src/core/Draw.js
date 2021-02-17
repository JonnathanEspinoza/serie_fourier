import React from 'react';

import Navbar from '../layout/Navbar';
import DrawTrain from '../layout/DrawTrain';

const Draw = () => {
    return (
        <div>
            <Navbar />
            <div className="containter">
                <div className="row">
                    <div className="col s6 m6 l12">
                        <h5 className="center">Draw Train</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 m6 l2">
                        <DrawTrain />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Draw;