import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function ContentContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
