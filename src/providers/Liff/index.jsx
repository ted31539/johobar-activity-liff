import { useContext } from "react";
import Context from "./Context";
export { default as withLiff } from "./with";
export { default } from "./Provider";

export function useLiff() {
  return useContext(Context);
}
