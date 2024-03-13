import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import configs from "src/configs";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      if (window.location.pathname === configs.baseUrl) {
        return navigate(`${configs.baseUrl}/activity/1?groupId=`, {
          replace: true,
        });
      }
    };
    init();
  }, [window.location.href]);

  return <div></div>;
}
