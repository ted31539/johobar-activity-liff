import { forwardRef } from "react";
import { styled, keyframes } from "@mui/material/styles";

import { Snackbar, Alert as MuiAlert, Typography } from "@mui/material";

const floatUp = keyframes`
0% {
       top: 50px;
   }
   100% {
    top: 0;
   }
`;

const SnackbartWrapper = styled(Snackbar)({
  top: 0,
  animation: `${floatUp} 1.5s`,
});

const CustomAlert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alert({ isOpen, messages = [], type }) {
  const _messages = messages.map((message, idx) => (
    <SnackbartWrapper
      key={idx}
      anchorOrigin={{ vertical: "top", horizontal: "right", width: "initial" }}
      open={isOpen}
      autoHideDuration={6000}
    >
      <CustomAlert severity={type} icon={false} sx={{ width: "100%" }}>
        <Typography variant="p" color="white">
          {`${message}`}
        </Typography>
      </CustomAlert>
    </SnackbartWrapper>
  ));

  return _messages;
}
