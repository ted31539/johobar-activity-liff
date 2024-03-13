import liff from "@line/liff";
import { useEffect, useState } from "react";

import configs from "src/configs";
import Context from "./Context";
import { initLiff } from "./methods";

const { liffId } = configs;

const Provider = ({ children }) => {
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { error, isReady } = await initLiff({ liffId });
      setError(error);
      setIsReady(isReady);
      if (!error && isReady) {
        setIsLoggedIn(liff.isLoggedIn());
      }
    };
    init();
  }, [liffId]);

  const props = {
    error,
    liff,
    isLoggedIn,
    isReady,
  };

  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
};

export default Provider;
