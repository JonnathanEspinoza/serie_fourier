import React, { useEffect, useContext } from 'react';

import FourierContext from '../context/Fourier/FourierContext';

const ManipuleFourier = () => {

    const { setTime, setHumbral } = useContext(FourierContext);


    useEffect(() => {
        const M = window.M;
        window.onload = function () {
            var elems = document.querySelectorAll("input[type=range]");
            M.Range.init(elems);
        };
    }, []);

    return (
        <div>
            <p className="range-field">
                <input type="range" id="test5" min="1" max="100" onChange={() => console.log(90)} />
            </p>
        </div>
    )
}

export default ManipuleFourier;