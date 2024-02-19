import React from "react";
import fs from "fs";
import readline from "readline";
import {BYUObject} from "../BYUObject/BYUObject";

export class LoadObject {
    public static async load(filename: string) {
        return await this.readFile(filename);
    }

    private static async readFile(filename: string): Promise<BYUObject | null> {
        const fileStream = fs.createReadStream(`./src/loadObjects/objects/${filename}`);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let object: BYUObject | null = null;

        // TODO: Fix this to correctly load vertices and indexes
        for await (const line of rl) {
            if(object !== null) {
                const vertex = line.split(" ").map(coordinate => +coordinate);
                object.addVertex(vertex);
            }
            else {
                const [numVertices, numTriangles] = line.split(" ").map(metadata => +metadata);
                object = new BYUObject(numVertices, numTriangles);
            }
        };

        return object;
    }
}