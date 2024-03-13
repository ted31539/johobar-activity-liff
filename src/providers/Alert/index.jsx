import { useContext } from "react";
import Context from "./Context";
export { default } from "./Provider";
export { default as withAlert } from "./with";

export function useAlert() {
  return useContext(Context);
}
