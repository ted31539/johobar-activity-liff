import Box from "@mui/material/Box";
import { useSearchParams, useParams } from "react-router-dom";
import { useState } from "react";

import Page from "src/Layout/Page";
import FireLoading from "src/components/FireLoading";
import useActicvity from "src/hooks/useActicvity";

import { activityFormWrapper } from "./style";
import Form from "./components/ActivityForm";
import ActivityInfo from "./components/ActivityInfo";

export default function Activity() {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const groupId = searchParams.get("groupId");

  const [isEditing, setIsEditing] = useState(false);

  const {
    activity,
    loading,
    customers,
    addTheActivityMember,
    removeTheActivityMember,
    updateTheActivity,
  } = useActicvity(id);

  console.log({ activity });

  const handleEdit = (status) => setIsEditing(status);

  return (
    <Page showToolBar={true}>
      <Box sx={activityFormWrapper}>
        <FireLoading loading={loading} />

        {isEditing ? (
          <Form
            current={activity}
            groupId={groupId}
            handleEdit={handleEdit}
            isEditing={isEditing}
            updateActivity={updateTheActivity}
            loading={loading}
          />
        ) : (
          <ActivityInfo
            current={activity}
            customers={customers}
            handleEdit={handleEdit}
            isEditing={isEditing}
            addMember={addTheActivityMember}
            removeMember={removeTheActivityMember}
            loading={loading}
          />
        )}
      </Box>
    </Page>
  );
}
