import React from 'react';
import Sketch from 'react-p5';

const DrawFourier = () => {
    let time = 0;
    let wave = [];

    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(600, 400).parent(canvasParentRef);
        //let x = (p5.windowWidth - p5.width) / 2;
        //let y = (p5.windowHeight - p5.height) / 2;
        //xyz.position(x, y);
    };
    let draw = (p5) => {
        // configure background
        p5.background(0);
        p5.translate(200, 200);

        // create the principal circle
        let radius = 100;
        p5.stroke(255);
        p5.noFill();
        p5.ellipse(0, 0, radius * 2);

        // create the point that rotates around the perimeter of the circle
        let x = radius * p5.cos(time);
        let y = radius * p5.sin(time);
        wave.unshift(y);
        p5.fill(255);
        p5.line(0, 0, x, y)
        p5.ellipse(x, y, 8);

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
            Draw whit o5.js
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}

export default DrawFourier;