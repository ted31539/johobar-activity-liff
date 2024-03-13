import Box from "@mui/material/Box";

import { useSearchParams, useNavigate } from "react-router-dom";

import FireLoading from "src/components/FireLoading";
import useActicvity from "src/hooks/useActicvity";
import { useClient } from "src/Providers/Client";
import Page from "src/Layout/Page";
import configs from "src/configs";

import { parseCreateActivityDetails } from "./method";
import { activityFormWrapper } from "./style";
import Form from "./components/ActivityForm";

export default function CreateActivity() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get("groupId");

  const { client } = useClient();
  const { createTheActivity, loading } = useActicvity();

  const onSubmit = async (data) => {
    console.log({ data });
    if (!client?.id) return;
    const [res, err] = await createTheActivity(
      parseCreateActivityDetails(data, client.id)
    );
    if (err) return;
    navigate(`${configs.baseUrl}activity/${res.id}?groupId=${groupId}`, {
      replace: true,
    });
  };

  return (
    <Page showToolBar={true}>
      <Box sx={activityFormWrapper}>
        <FireLoading loading={loading} />
        <Form onSubmit={onSubmit} loading={loading} />
      </Box>
    </Page>
  );
}
