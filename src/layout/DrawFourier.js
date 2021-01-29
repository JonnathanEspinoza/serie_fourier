import React from 'react';
import Sketch from 'react-p5';

const DrawFourier = () => {
    let time = 0;
    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(600, 400).parent(canvasParentRef);
        //let x = (p5.windowWidth - p5.width) / 2;
        //let y = (p5.windowHeight - p5.height) / 2;
        //xyz.position(x, y);
    };
    let draw = (p5) => {
        p5.background(0);
        p5.translate(200, 200);

        let radius = 100;
        p5.stroke(255);
        p5.noFill();
        p5.ellipse(0, 0, radius * 2);

        time += 0.01;
    };
    return (
        <div>
            Draw whit o5.js
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}

export default DrawFourier;