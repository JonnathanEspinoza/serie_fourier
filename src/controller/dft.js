// Coding Challenge 130.1: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130-fourier-transform-drawing.html
// https://youtu.be/MY4luNgGfms
// https://editor.p5js.org/codingtrain/sketches/jawHqwfda

import p5 from 'react-p5';

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

export default dft;