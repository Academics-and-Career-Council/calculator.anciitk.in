import { atom } from "recoil";

export const allSemsData = atom<[] | undefined>({
  key: "session-state",
  default: [],
});