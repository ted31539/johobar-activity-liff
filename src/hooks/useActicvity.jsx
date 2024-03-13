import { useEffect, useState, useCallback } from "react";
import { isEmpty } from "lodash";
import { useSearchParams } from "react-router-dom";

import {
  getActivity,
  updateActivity,
  createActivity,
  addActivityMember,
  removeActivityMember,
} from "src/api/activity";
import { useAlert } from "src/providers/Alert";
import useLoading from "src/hooks/useLoading";

const useActivity = (id) => {
  const [searchParams] = useSearchParams();
  const GROUP_ID = searchParams.get("groupId");

  const { showAlert, showError } = useAlert();
  const { loading, setLoading } = useLoading();
  const [activity, setActivity] = useState({});
  const [customers, setCustomers] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const updateTheActivity = useCallback(
    async (details = {}, groupId = GROUP_ID) => {
      try {
        if (isFetch) return;
        setLoading(true);
        setIsFetch(true);

        if (isEmpty(details)) throw new Error("invalid details");
        const [res, err] = await updateActivity(groupId, details);
        if (err) throw new Error(err?.message);
        setIsFetch(false);
        const [fRes, fErr] = await fetchActivity(details.id);
        if (fErr) throw new Error(fErr?.message);
        setLoading(false);
        showAlert("你更新活動囉！", "success");
        return [res, null];
      } catch (err) {
        console.log(err);
        setIsFetch(false);
        setLoading(false);
        showError(err.message || "出了一點小狀況");
        return [null, err];
      }
    },
    [GROUP_ID]
  );

  const addTheActivityMember = useCallback(
    async (details = {}, groupId = GROUP_ID) => {
      try {
        setLoading(true);
        if (isEmpty(details)) throw new Error("invalid details");
        const [res, err] = await addActivityMember(groupId, details);
        if (err) throw new Error(err?.message);
        const [fRes, fErr] = await fetchActivity(details.id);
        if (fErr) throw new Error(fErr?.message);
        showAlert("你參加活動囉！", "success");
        setLoading(false);
        return [res, null];
      } catch (err) {
        console.log(err);
        setLoading(false);
        showError(err.message || "出了一點小狀況");
        return [null, err];
      }
    },
    [GROUP_ID]
  );

  const removeTheActivityMember = useCallback(
    async (details = {}, groupId = GROUP_ID) => {
      try {
        setLoading(true);
        if (isEmpty(details)) throw new Error("invalid details");
        const [res, err] = await removeActivityMember(groupId, details);
        if (err) throw new Error(err?.message);
        const [fRes, fErr] = await fetchActivity(details.id);
        if (fErr) throw new Error(fErr?.message);
        showAlert("真可惜，你不參加活動！", "success");
        return [res, null];
      } catch (err) {
        console.log(err);
        setLoading(false);
        showError(err.message || "出了一點小狀況");
        return [null, err];
      }
    },
    [GROUP_ID]
  );

  const createTheActivity = useCallback(
    async (details = {}, groupId = GROUP_ID) => {
      try {
        if (isFetch) return;
        setLoading(true);
        setIsFetch(true);
        if (isEmpty(details)) throw new Error("invalid details");
        const [res, err] = await createActivity(groupId, details);
        if (err) throw new Error(err?.message);
        setIsFetch(false);
        setLoading(false);
        showAlert("舉辦活動成功！已推播活動訊息到你的群組囉！", "success");
        return [res, null];
      } catch (err) {
        console.log(err);
        setIsFetch(false);
        showError(err.message || "拍謝啦，出了一點小狀況");
        setLoading(false);
        return [null, err];
      }
    },
    [GROUP_ID]
  );

  const fetchActivity = useCallback(async (id) => {
    if (!id) return;
    if (isFetch) return;
    setIsFetch(true);
    setLoading(true);
    try {
      const [activityRes, err] = await getActivity(id);
      if (err) throw new Error(err?.message);
      const { activity, customers } = activityRes;
      activity.host = JSON.parse(activity.host);
      activity.member = JSON.parse(activity.member);
      setActivity(activity);
      setCustomers(customers);
      setLoading(false);
      setIsFetch(false);
      return [(activityRes, err)];
    } catch (err) {
      console.log(err);
      showError(err?.message || "Ops 系統忙碌喔～", "error");
      setLoading(false);
      setIsFetch(false);
      return [(null, err)];
    }
  }, []);

  useEffect(() => {
    fetchActivity(id);
  }, [id]);

  return {
    activity,
    loading,
    customers,
    updateTheActivity,
    createTheActivity,
    addTheActivityMember,
    removeTheActivityMember,
  };
};

export default useActivity;
