import { atom } from "recoil";
import DataType from "./datatype";

export const allSemsData = atom<DataType[][]>({
  key: "semall",
  default: [],
});