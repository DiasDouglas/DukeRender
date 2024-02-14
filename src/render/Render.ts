import {P5CanvasInstance} from "react-p5-wrapper";

export default function render(p5: P5CanvasInstance){
    p5.setup = () => {
        p5.createCanvas(640, 480);
        p5.noStroke();
    }

    p5.draw = () => {
        p5.background('black');
        p5.stroke('white');
        p5.point(10, 10);
    }
}