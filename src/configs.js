const configs = {
  // Env
  stage: import.meta.env.MODE || "local",
  baseUrl: "/",
  endPoint: import.meta.env.VITE_END_POINT || "",

  // LINE
  OALink: import.meta.env.VITE_LINE_AT_URL || "",
  liffId: import.meta.env.VITE_LIFF_ID || "",
};
console.log(import.meta.env);

export default configs;
