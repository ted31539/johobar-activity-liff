import { useContext } from "react";
import Context from "./Context";
export { default as withClient } from "./with";
export { default } from "./Provider";

export function useClient() {
  return useContext(Context);
}
