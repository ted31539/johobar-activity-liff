import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { formProps } from "../define";

const schema = yup
  .object({
    title: yup.string().required("請輸入活動名稱"),
    location: yup.string().required("請輸入地點"),
    startTime: yup.date().required("請選擇活動時間"),
    content: yup.string(),
  })
  .required();

const ActivityForm = ({ onSubmit, loading }) => {
  const { control, handleSubmit } = useForm({
    ...formProps,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} p={4}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          創建新活動
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
              sx={{ "& input": { background: "white" } }}
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
              sx={{ "& input": { background: "white" } }}
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
            <DateTimePicker
              sx={{ "& input": { background: "white" } }}
              label="活動時間"
              {...field}
            />
          )}
        />
        <Controller
          name="content"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <TextField
              error={invalid}
              multiline
              sx={{ "& input": { background: "white" } }}
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
          創立活動
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: "blue",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Button>
      </Stack>
    </form>
  );
};

export default ActivityForm;
