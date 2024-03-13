import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import { useForm } from "../index";
import { inputSx } from "../styled";

const Input = ({
  name,
  label,
  rules,
  controllerPorps,
  formItemProps,
  ...props
}) => {
  const { control } = useForm();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      {...controllerPorps}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          error={invalid}
          required={true}
          sx={inputSx}
          label={label}
          {...field}
          helperText={error?.message}
          {...formItemProps}
          {...props}
        />
      )}
    />
  );
};

export default Input;
