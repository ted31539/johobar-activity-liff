import { axiosFetch, customerEndPoint as endPoint } from "./utils";
import { AXIOS_METHODS } from "./define";

export function getOrCreateCustomer(userId, data) {
  const uri = endPoint.getOrCreateCustomer(userId);
  let settings = {
    uri,
    method: AXIOS_METHODS.POST,
    data: JSON.stringify(data),
  };

  return axiosFetch(settings);
}
