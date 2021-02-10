import React, { useEffect, useContext } from 'react';
import Sketch from 'react-p5';

import FourierContext from '../context/Fourier/FourierContext';

const EgFourier = () => {

    const { setTime, setHumbral, humbral } = useContext(FourierContext);

    useEffect(() => {
        //setTime(8);
    }, []);

    let time = 0;
    let wave = [];
    
    //let slider;
    
    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(600, 400).parent(canvasParentRef);
        //slider = p5.createSlider(1, 10, 1);
        
        //let x = (p5.windowWidth - p5.width) / 2;
        //let y = (p5.windowHeight - p5.height) / 2;
        //xyz.position(x, y);
    };
    let draw = (p5) => {
        // configure background
        p5.background(0);
        p5.translate(150, 200);

        let x = 0;
        let y = 0;

        for (let i = 0; i < humbral; i++) {

            let prevx = x;
            let prevy = y;

            let n = 2 * i + 1;


            // create the principal circle
            let radius = 75 * (4 / (n * p5.PI));
            p5.stroke(255, 100); // contorno color
            p5.noFill();
            p5.ellipse(prevx, prevy, radius * 2);

            // create the point that rotates around the perimeter of the circle
            x += radius * p5.cos(n * time);
            y += radius * p5.sin(n * time);
            
            
            //p5.fill(255); // relleno color
            p5.stroke(255);
            p5.line(prevx, prevy, x, y);
            //p5.ellipse(x, y, 8);
            
        }
        wave.unshift(y);
        // create the wave
        p5.translate(200, 0);
        p5.line(x-200, y, 0, wave[0]);
        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < wave.length; i++) {
            p5.vertex(i, wave[i]);
        }
        p5.endShape();

        time += 0.05;

        if (wave.length > 250) {
            wave.pop();
        }
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}

export default EgFourier;