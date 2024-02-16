import React from "react";
import {DukeMath} from "./DukeMath";

describe("DukeMath", () => {
    describe("Matrix multiplication", () => {
        it("returns " +
            "[[75.25, 82.75], [[160.75, 177.25]]" +
            "when Matrix A is [[1.5, 2.5, 3.5], [4.5, 5.5, 6.5]] and Matrix B is [[7.5, 8.5], [9.5, 10.5], [11.5, 12.5]]", () => {

            const A = [[1.5, 2.5, 3.5], [4.5, 5.5, 6.5]];
            const B = [[7.5, 8.5], [9.5, 10.5], [11.5, 12.5]];

            expect(DukeMath.matrixMultiplication(A, B)).toEqual([[75.25, 82.75], [160.75, 177.25]]);
        });
    });

    describe("3D points subtraction (returns a vector)", () => {
        it("returns [2.5, -0.5, 0.5] when calculate [3.5, 1.5, 2] - [1, 2, 1.5]", () => {
            const A = [3.5, 1.5, 2];
            const B = [1, 2, 1.5];

            expect(DukeMath.pointsSubtraction(A, B)).toEqual([2.5, -0.5, 0.5]);
        });
    });

    describe("vector scalar (dot) product", () => {
        it("returns 9.5 when calculates [3.5, 1.5, 2.0].[1, 2, 1.5]", () => {
            const A = [3.5, 1.5, 2];
            const B = [1, 2, 1.5];

            expect(DukeMath.dotProduct(A, B)).toEqual(9.5);
        });
    });

    describe("vector vectorial (cross) product", () => {
        it("returns [-1.75, -3.25, 5.5] when calculates [3.5, 1.5, 2.0]x[1, 2, 1.5]", () => {
            const A = [3.5, 1.5, 2];
            const B = [1, 2, 1.5];

            expect(DukeMath.crossProduct(A, B)).toEqual([-1.75, -3.25, 5.5]);
        });
    });

    describe("vector magnitude", () => {
        it("returns 4.30116 when calculates for [3.5, 1.5, 2]", () => {
           expect(+DukeMath.vectorMagnitude([3.5, 1.5, 2]).toFixed(5)).toEqual(4.30116);
        });
    });

    describe("normalization of a vector", () => {
        it("returns [0.81373, 0.34874, 0.46499] when calculates for [3.5, 1.5, 2]", () => {
            expect(DukeMath.normalizeVector([3.5, 1.5, 2])).toEqual([0.81373, 0.34874, 0.46499]);
        });
    });

    describe("inverse matrix 2d", () => {
       it("returns '[[3, -1], [-5, 2]]' as the inverse of matrix [[2, 1], [5, 3]]", () => {
           expect(DukeMath.inverseMatrix2D([[2, 1], [5, 3]])).toEqual([[3, -1], [-5, 2]]);
       });
    });

    describe("barycentric coordinate of a 2D point in relation to other three non-collinear 2D points", () => {
        it("returns '[0.5625, 0.125, 0.3125]' as the barycentric coordinate of P(-0.25, 0.75), " +
            "in relation to A(-1, 1), B(0, -1) and C(1, 1)", () => {
            expect(DukeMath.barycentricCoordinate(
                [-0.25, 0.75],
                [-1, 1],
                [0, -1],
                [1, 1],
                )).toEqual([0.5625, 0.125, 0.3125]);
        });
    });

    describe("carthesian coordinate of a 2D point from its barycentric coordinate in relation to other three non-collinear 2D points", () => {

    });
});