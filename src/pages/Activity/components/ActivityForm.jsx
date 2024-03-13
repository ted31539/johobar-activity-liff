import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import ReplyIcon from "@mui/icons-material/Reply";
import Slide from "@mui/material/Slide";

import { formProps } from "../define";
import { parseUpdateActivityDetails } from "../method";
import { textFieldSx, circularProgressSx, fabSx } from "../style";

const schema = yup
  .object({
    title: yup.string().required("請輸入活動名稱"),
    location: yup.string().required("請輸入地點"),
    startTime: yup.date().required("請選擇活動時間"),
    content: yup.string(),
  })
  .required();

const ActivityForm = ({
  loading,
  current = {},
  handleEdit,
  isEditing,
  updateActivity,
}) => {
  const { control, reset, handleSubmit } = useForm({
    ...formProps,
    resolver: yupResolver(schema),
    defaultValues: {
      title: current?.title,
      location: current?.location,
      startTime: dayjs(current?.startTime),
      content: current?.content,
    },
  });

  const onSubmit = async (data) => {
    const [res, err] = await updateActivity(
      parseUpdateActivityDetails(data, current)
    );
    if (err) return;
    reset({ title: "", startTime: dayjs(), content: "", location: "" });
    handleEdit(false);
  };

  if (loading) return <></>;

  return (
    <Slide direction="right" in={isEditing}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} p={4} sx={{ position: "relative" }}>
          <Fab
            onClick={() => handleEdit(false)}
            color="secondary"
            aria-label="add"
            size="small"
            sx={fabSx}
          >
            <ReplyIcon />
          </Fab>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            編輯活動
          </Typography>
          <Controller
            name="title"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                error={invalid}
                required={true}
                sx={textFieldSx}
                label="活動名稱"
                {...field}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                error={invalid}
                required={true}
                sx={textFieldSx}
                label="活動地點 "
                {...field}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <DateTimePicker sx={textFieldSx} label="活動時間" {...field} />
            )}
          />
          <Controller
            name="content"
            control={control}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                error={invalid}
                multiline
                sx={textFieldSx}
                label="活動內容 "
                {...field}
                helperText={error?.message}
              />
            )}
          />
          <Button
            sx={{ fontSize: "1.25rem" }}
            disabled={loading}
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
          >
            送出
            {loading && <CircularProgress size={24} sx={circularProgressSx} />}
          </Button>
        </Stack>
      </form>
    </Slide>
  );
};

export default ActivityForm;
