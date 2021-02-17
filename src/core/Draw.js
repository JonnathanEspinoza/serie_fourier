import React from 'react';

import Navbar from '../layout/Navbar';
import DrawTrain from '../layout/DrawTrain';
import DrawFourier from '../layout/DrawFourier';

const Draw = () => {
    return (
        <div>
            <Navbar />
            <div className="containter">
                <div className="row">
                    <div className="col s6 m6 l12">
                        <h5 className="center">Drawing</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 m6 l2">
                        <DrawFourier />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Draw;