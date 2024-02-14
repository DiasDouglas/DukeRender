export class DukeMath {
    public static matrixMultiplication(A: number[][], B: number[][]): number[][] {
        let result = new Array(A.length)
            .fill(0).map(() => new Array(B[0].length).fill(0));

        for(let i = 0; i < A.length; i++){
            for(let j = 0; j < B[0].length; j++) {
                for(let k = 0; k < B.length; k++) {
                    result[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        return result;
    }

    public static pointsSubtraction(A: number[], B: number[]): number[] {
        let result: number[] = new Array(A.length);

        for(let i = 0; i < A.length; i++){
            result[i] = A[i] - B[i];
        }

        return result;
    }

    public static dotProduct(A: number[], B: number[]): number {
        let result: number = 0;

        for(let i = 0; i < A.length; i++){
            result += A[i] * B[i];
        }

        return result;
    }

    public static crossProduct(A: number[], B: number[]): number[] {
        let result: number[] = new Array(3);

            result[0] = (A[1] * B[2]) - (A[2] * B[1]);
            result[1] = (A[2] * B[0]) - (A[0] * B[2]);
            result[2] = (A[0] * B[1]) - (A[1] * B[0]);

        return result;
    }

    public static vectorMagnitude(A: number[]) {
        const sum = A.reduce((acc, curr) => acc + curr**2, 0);
        return Math.sqrt(sum);
    }

    public static normalizeVector(A: number[]) {
        const magnitude = this.vectorMagnitude(A);
        return A.map(coordinate => +(coordinate / magnitude).toFixed(5));
    }
}