import { BYUObject } from "../BYUObject/BYUObject";
import axios from "axios";

export async function loadObject(filename: string) {
  return axios
    .get(`http://localhost:4000/api/objects?name=${filename}`)
    .then((res) => {
      return new BYUObject(
        res.data.numVertices,
        res.data.numTriangles,
        res.data.vertices,
        res.data.indexes,
      );
    })
    .catch((err) => {
      throw err;
    });
}
