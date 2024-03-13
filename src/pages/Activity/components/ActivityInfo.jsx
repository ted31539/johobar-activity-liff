import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import Fab from "@mui/material/Fab";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TocIcon from "@mui/icons-material/Toc";
import Avatar from "@mui/material/Avatar";
import StarRateIcon from "@mui/icons-material/StarRate";
import AvatarGroup from "@mui/material/AvatarGroup";
import Groups2Icon from "@mui/icons-material/Groups2";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { isEmpty } from "lodash";

import { useClient } from "src/Providers/Client";
import ActivityImg from "src/assets/activityBg.jpg";
import { cardSx, infoFabSx, infoTitleSx } from "../style";

const ActivityInfo = ({
  current = {},
  customers,
  handleEdit,
  isEditing,
  addMember,
  removeMember,
  loading,
}) => {
  return (
    <Stack spacing={2} p={4}>
      {loading || isEmpty(current) ? (
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      ) : (
        <Typography variant="h3" sx={infoTitleSx}>
          {current?.title}
        </Typography>
      )}
      <ActivityCard
        isEditing={isEditing}
        current={current}
        customers={customers}
        handleEdit={handleEdit}
        addMember={addMember}
        removeMember={removeMember}
        loading={loading}
      />
    </Stack>
  );
};

function ActivityCard({
  current,
  customers = [],
  handleEdit,
  isEditing,
  addMember,
  removeMember,
  loading,
}) {
  const { client } = useClient();
  const {
    content,
    location,
    startTime,
    host,
    member = [],
    updateTime,
  } = current;

  const hostDetail = customers.find(({ id }) => host.includes(id));

  const memeberList = member.map((mId) => {
    const customer = customers.find(({ id }) => id === mId);
    return customer;
  });

  const isMember = member.includes(client.id);
  const isHost = hostDetail?.id === client.id;

  const handleEditMember = async () => {
    if (!client.id || !current.id || isHost) return;
    const details = { member: JSON.stringify([client.id]), id: current.id };
    isMember ? await removeMember(details) : await addMember(details);
  };

  return (
    <Slide direction="right" in={!isEditing}>
      {loading || isEmpty(current) ? (
        <Card sx={cardSx}>
          <Skeleton variant="rectangular" width="100%" height="20vh" />

          <CardContent>
            <List>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
              >
                <ListItemIcon>
                  <DateRangeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={<Skeleton variant="text" />} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
              >
                <ListItemIcon>
                  <LocationOnIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={<Skeleton variant="text" />} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
              >
                <ListItemIcon>
                  <StarRateIcon color="secondary" />
                </ListItemIcon>
                <Skeleton variant="circular" width={"24px"} height={"24px"} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
                secondaryAction={
                  <Skeleton variant="circular" width={"24px"} height={"24px"} />
                }
              >
                <ListItemIcon>
                  <Groups2Icon color="secondary" />
                </ListItemIcon>

                <Skeleton variant="circular" width={"24px"} height={"24px"} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                }}
              >
                <ListItemIcon>
                  <TocIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={<Skeleton variant="text" />} />
              </ListItem>
            </List>

            <Typography
              variant="p"
              sx={{
                textAlign: "right",
                display: "block",
                opacity: 0.5,
                fontSize: ".55rem",
              }}
            >
              <Skeleton variant="text" />
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={cardSx}>
          <Fab
            onClick={handleEdit}
            color="secondary"
            aria-label="add"
            size="small"
            sx={infoFabSx}
          >
            <EditIcon />
          </Fab>
          <CardMedia sx={{ height: "20vh" }} image={ActivityImg} title="img" />
          <CardContent>
            <List>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                  "& .MuiTypography-body1": {
                    fontWeight: 900,
                  },
                }}
              >
                <ListItemIcon>
                  <DateRangeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={dayjs(startTime)
                    .local()
                    .format("YYYY 年-MM 月-DD 日 HH:mm")}
                />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                  "& .MuiTypography-body1": {
                    fontWeight: 900,
                    wordBreak: "break-all",
                  },
                }}
              >
                <ListItemIcon>
                  <LocationOnIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={location} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
              >
                <ListItemIcon>
                  <StarRateIcon color="secondary" />
                </ListItemIcon>

                <AvatarGroup>
                  <Avatar
                    sx={{ width: "24px", height: "24px" }}
                    alt={`Avatar`}
                    src={hostDetail?.pictureUrl}
                  />
                </AvatarGroup>
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  marginBottom: ".5rem",
                }}
                secondaryAction={
                  isHost ? (
                    <></>
                  ) : (
                    <IconButton aria-label="comment" onClick={handleEditMember}>
                      {isMember ? (
                        <PersonRemoveIcon color="primary" />
                      ) : (
                        <PersonAddAlt1Icon className="blink" color="primary" />
                      )}
                    </IconButton>
                  )
                }
              >
                <ListItemIcon>
                  <Groups2Icon color="secondary" />
                </ListItemIcon>

                <GroupAvatars avatars={memeberList} />
              </ListItem>
              <ListItem
                sx={{
                  background: (theme) => theme.palette.secondary.light,
                  wordBreak: "break-all",
                }}
              >
                <ListItemIcon>
                  <TocIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={content} />
              </ListItem>
            </List>

            <Typography
              variant="p"
              sx={{
                textAlign: "right",
                display: "block",
                opacity: 0.5,
                fontSize: ".55rem",
              }}
            >
              最後更新：
              {dayjs(updateTime).local().format("YYYY 年-MM 月-DD 日 HH:mm")}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Slide>
  );
}

function GroupAvatars({ avatars = [] }) {
  return isEmpty(avatars) ? (
    "可憐啊～沒人參加"
  ) : (
    <AvatarGroup max={4}>
      {avatars.map((m) => (
        <Avatar
          sx={{ width: "24px", height: "24px" }}
          key={m?.id}
          alt="member"
          src={m?.pictureUrl}
        />
      ))}
    </AvatarGroup>
  );
}

export default ActivityInfo;
