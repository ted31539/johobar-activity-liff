import { useContext } from "react";
import Context from "./Context";
export { default as withForm } from "./with";
export { default } from "./Provider";

export function useForm() {
  return useContext(Context);
}
