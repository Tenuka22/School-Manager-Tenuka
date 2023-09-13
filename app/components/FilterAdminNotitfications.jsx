import { getNotifications } from "@app/components/Fetch/Fetch";

export async function fetchNotifications() {
  const data = await getNotifications();
  const filteredData = data.filter(
    (notification) => notification.whom === "admins"
  );
  return filteredData;
}
