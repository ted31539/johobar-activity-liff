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
    keepDirtyValues: true,
    keepErrors: true,
  },
};
