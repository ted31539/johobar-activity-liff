import { useEffect, useState } from "react";

import { getOrCreateCustomer } from "src/api/customer";
import { useLiff } from "src/providers/Liff";
import { useAlert } from "src/providers/Alert";

import Context from "./Context";
import { isEmpty } from "lodash";

const Provider = ({ children }) => {
  const [client, setClient] = useState({});
  const [profile, setProfile] = useState({});
  const { liff, isReady } = useLiff();

  const { showAlert } = useAlert();

  const isAuth = !isEmpty(client);

  useEffect(() => {
    if (!liff || !isReady) return;

    async function getOrCreateClient() {
      try {
        const profile = await liff.getProfile();
        if (!profile) throw new Error("沒有 LINE profile");

        const [client, error] = await getOrCreateCustomer(
          profile.userId,
          profile
        );

        if (error) throw new Error(error);
        setClient(client);
        setProfile(profile);
      } catch (error) {
        console.error(error);
        showAlert(error?.message);
        liff.logout();
        liff.login({ redirectUri: window.location.href });
      }
    }

    getOrCreateClient();
  }, [isReady]);

  const props = { client, profile, isAuth };

  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
};

export default Provider;
