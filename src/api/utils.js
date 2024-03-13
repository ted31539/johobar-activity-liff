import axios from "axios";
import configs from "src/configs";

export async function axiosFetch(config) {
  try {
    const response = await axios({
      ...config,
      url: `${configs.endPoint}${config.uri}`,
    });
    const data = response.data.data;
    return [data, null];
  } catch (error) {
    console.error(error);

    let message = "發生錯誤";
    try {
      const resp = JSON.parse(error.message);
      message = resp.message;
    } catch (error) {
      console.error("Error parsing error message:", error);
    }
    return [null, message];
  }
}

export const activityEndPoint = {
  createActivity: (groupId) => `?route=createActivity&groupId=${groupId}`,
  updateActivity: (groupId) => `?route=updateActivity&groupId=${groupId}`,
  addActivityMember: (groupId) => `?route=addActivityMember&groupId=${groupId}`,
  removeActivityMember: (groupId) =>
    `?route=removeActivityMember&groupId=${groupId}`,
  getActivity: (id) => `?route=getActivity&id=${id}`,
};

export const customerEndPoint = {
  getOrCreateCustomer: (userId) =>
    `?route=getOrCreateCustomer&userId=${userId}`,
};
