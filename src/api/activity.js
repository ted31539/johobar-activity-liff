import { axiosFetch, activityEndPoint as endPoint } from "./utils";
import { AXIOS_METHODS } from "./define";

export function createActivity(groupId, details) {
  const uri = endPoint.createActivity(groupId);
  let settings = {
    uri,
    method: AXIOS_METHODS.POST,
    data: JSON.stringify(details),
  };
  return axiosFetch(settings);
}

export function updateActivity(groupId, details) {
  const uri = endPoint.updateActivity(groupId);
  let settings = {
    uri,
    method: AXIOS_METHODS.POST,
    data: JSON.stringify(details),
  };
  return axiosFetch(settings);
}

export function addActivityMember(groupId, details) {
  const uri = endPoint.addActivityMember(groupId);
  let settings = {
    uri,
    method: AXIOS_METHODS.POST,
    data: JSON.stringify(details),
  };
  return axiosFetch(settings);
}

export function removeActivityMember(groupId, details) {
  const uri = endPoint.removeActivityMember(groupId);
  let settings = {
    uri,
    method: AXIOS_METHODS.POST,
    data: JSON.stringify(details),
  };
  return axiosFetch(settings);
}

export function getActivity(id) {
  const uri = endPoint.getActivity(id);
  let settings = {
    uri,
    method: AXIOS_METHODS.GET,
  };

  return axiosFetch(settings);
}
