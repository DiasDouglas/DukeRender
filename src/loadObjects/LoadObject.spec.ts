import React from "react";
import { LoadObject } from "./LoadObject";

describe("LoadObject", () => {
    describe("Load", () => {
        it("returns the correct object ", async () => {
            const result = await LoadObject.load("example.byu")

            expect(result).toEqual({
                numTriangles: 4,
                numVertices: 4,
                vertices: [
                    [1, 1, 1], [1, 30, 1], [30, 30, 1],
                    [ 1, 1, 30], [1, 2, 3], [1, 2, 4],
                    [2, 3, 4], [1, 3, 4]
                ]
            });
        });
    });
});