import React, { useEffect, useContext } from 'react';
import Sketch from 'react-p5';

import drawing from '../controller/codingtrain';

//import FourierContext from '../context/Fourier/FourierContext';

const DrawTrain = () => {

    //const { setTime, setHumbral, humbral } = useContext(FourierContext);

    useEffect(() => {
        //setTime(8);
    }, []);

    let x = [];
    let y = [];
    let fourierX;
    let fourierY;
    let time = 0;
    let path = [];;

    //let slider;

    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(800, 600).parent(canvasParentRef);

        // ALGORITMO TRANSFORMADA DE FOURIER DISCRETA
        function dft(x) {
            const X = [];
            const N = x.length;
            for (let k = 0; k < N; k++) {
                let re = 0;
                let im = 0;
                for (let n = 0; n < N; n++) {
                    const phi = (p5.TWO_PI * k * n) / N;
                    re += x[n] * p5.cos(phi);
                    im -= x[n] * p5.sin(phi);
                }
                re = re / N;
                im = im / N;

                let freq = k;
                let amp = p5.sqrt(re * re + im * im);
                let phase = p5.atan2(im, re);
                X[k] = { re, im, freq, amp, phase };
            }
            return X;
        }

        // señal arbitraria
        const skip = 8;
        for (let i = 0; i < drawing.length; i += skip) {
            x.push(drawing[i].x);
            y.push(drawing[i].y);
        }

        // for (let i = 0; i < 100; i++) {
        //     let angle = p5.map(i, 0, 100, 0, p5.TWO_PI);
        //     x[i] = 50 * p5.cos(angle);
        //     y[i] = 50 * p5.sin(angle);
        // }

    // calcular la transformada discreta de Fourier de una señal arbitraria
    fourierX = dft(x);
    fourierY = dft(y);

    fourierX.sort((a, b) => b.amp - a.amp);
    fourierY.sort((a, b) => b.amp - a.amp);

};

function epiCycles(x, y, rotation, fourier, p5) {
    for (let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
        let freq = fourier[i].freq;
        let radius = fourier[i].amp;
        let phase = fourier[i].phase;
        x += radius * p5.cos(freq * time + phase + rotation);
        y += radius * p5.sin(freq * time + phase + rotation);

        p5.stroke(255, 100);
        p5.noFill();
        p5.ellipse(prevx, prevy, radius * 2);
        p5.stroke(255);
        p5.line(prevx, prevy, x, y);
    }
    return p5.createVector(x, y);
}


let draw = (p5) => {
    // configure background
    p5.background(0);

    let vx = epiCycles(300, 50, 0, fourierX, p5);
    let vy = epiCycles(50, 200, p5.HALF_PI, fourierY, p5);
    let v = p5.createVector(vx.x, vy.y);
    path.unshift(v);
    p5.line(vx.x, vx.y, v.x, v.y);
    p5.line(vy.x, vy.y, v.x, v.y);

    p5.beginShape();
    p5.noFill();
    for (let i = 0; i < path.length; i++) {
        p5.vertex(path[i].x, path[i].y);
    }
    p5.endShape();

    const dt = p5.TWO_PI / fourierY.length;
    time += dt;

    if (time > p5.TWO_PI) {
        time = 0;
        path = [];
    }

    //if (wave.length > 250) {
    //  wave.pop();
    //}
};


return (
    <div>
        Draw
        <Sketch setup={setup} draw={draw} />
    </div>
)
}

export default DrawTrain;