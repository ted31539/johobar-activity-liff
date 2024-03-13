import liff from "@line/liff";
import configs from "src/configs";

export const initLiff = async (liffConfig) => {
  try {
    await liff.init({
      ...liffConfig,
      withLoginOnExternalBrowser: true,
    });
    return { isReady: true };
  } catch (error) {
    console.log(error);
    return { error, isReady: false };
  }
};
