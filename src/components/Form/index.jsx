import { useContext } from "react";

import Context from "./Context";

export { default } from "./Provider";

export function useForm() {
  return useContext(Context);
}
