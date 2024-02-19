import {P5CanvasInstance} from "react-p5-wrapper";
import {Example} from "../loadObjects/objects/Example";

const WIDTH: number = 640;
const HEIGHT: number = 480;

const getNormalizedX = (x: number, minX: number, maxX: number) => {
    return ((x - minX)/(maxX - minX)) * (WIDTH - 1);
}

const getNormalizedY = (y: number, minY: number, maxY: number) => {
    return ((y - minY)/(maxY - minY)) * (HEIGHT - 1);
}

export default function render(p5: P5CanvasInstance){
    p5.setup = () => {
        p5.createCanvas(WIDTH, HEIGHT);
        p5.noStroke();
    }

    const object = Example;

    p5.draw = () => {
        p5.background('black');
        p5.stroke('white');

        for (let vertex of object?.getVertices()!) {
            const x = getNormalizedX(vertex[0], object.getMinX(), object.getMaxX());
            const y = getNormalizedY(vertex[1], object.getMinX(), object.getMaxY());
            p5.point(x, y);
        }
    }
}