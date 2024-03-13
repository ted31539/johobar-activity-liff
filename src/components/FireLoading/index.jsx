import Backdrop from "@mui/material/Backdrop";

import Loader from "src/components/Loader";
import "./style.scss";

export default function FireLoading({ loading }) {
  return (
    <div>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: "100vh",
        }}
        open={loading}
      >
        <Loader />
        <Burn />
      </Backdrop>
    </div>
  );
}

const Burn = () => {
  const parts = 50;

  const renderParticles = () => {
    return Array.from({ length: parts }, (_, index) => (
      <div key={`particle-${index}`} className="particle"></div>
    ));
  };

  return <div className="fire">{renderParticles()}</div>;
};
