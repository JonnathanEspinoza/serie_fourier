import React, { useEffect, useContext } from 'react';
import Sketch from 'react-p5';

//import drawing from '../controller/codingtrain';
import dft from '../controller/dft';

const DrawFourier = () => {

    const USER = 0;
    const FOURIER = 1;

    let x = [];
    let y = [];
    let fourierX;
    let fourierY;
    let time = 0;
    let path = [];
    let drawing = [];
    let state = -1;

    let mousePressed = (p5) => {
        state = USER;
        drawing = [];
        x = [];
        y = [];
        time = 0;
        path = [];
    }

    let mouseReleased = (p5) => {
        state = FOURIER;
        const skip = 1;
        //console.log(drawing)
        for (let i = 0; i < drawing.length; i += skip) {
            x.push(drawing[i].x);
            y.push(drawing[i].y);
        }

        // calcular la transformada discreta de Fourier de una señal arbitraria
        fourierX = dft(x, p5);
        fourierY = dft(y, p5);

        fourierX.sort((a, b) => b.amp - a.amp);
        fourierY.sort((a, b) => b.amp - a.amp);
    }

    let setup = (p5, canvasParentRef) => {
        let xyz = p5.createCanvas(800, 600).parent(canvasParentRef);
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

        if (state == USER) {
            let point = p5.createVector(p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2);
            drawing.push(point);
            p5.stroke(255);
            p5.noFill();
            p5.beginShape();
            for (let v of drawing) {
                p5.vertex(v.x + p5.width / 2, v.y + p5.height / 2);
            }
            p5.endShape();

        } else if (state == FOURIER) {

            let vx = epiCycles(p5.width / 2, 100, 0, fourierX, p5);
            let vy = epiCycles(100, p5.height / 2, p5.HALF_PI, fourierY, p5);
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

        }
    };


    return (
        <div>
            <Sketch setup={setup} draw={draw} mousePressed={mousePressed} mouseReleased={mouseReleased} />
        </div>
    )
}

export default DrawFourier;