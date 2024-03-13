import dayjs from "dayjs";

export const formProps = {
  defaultValues: {
    title: "",
    startTime: dayjs(),
    location: "",
    content: "",
  },
  mode: "all",
  shouldUnregister: false,
  resetOptions: {
    keepDirtyValues: true, // user-interacted input will be retained
    keepErrors: true, // input errors will be retained with value update
  },
};
