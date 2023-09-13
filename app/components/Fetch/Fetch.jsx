export async function getAdmins() {
  const res = await fetch("http://localhost:4000/admins");
  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();
  return data;
}
export async function getNotifications() {
  const res = await fetch("http://localhost:4000/notifications");
  const data = await res.json();
  return data;
}
export async function getRecent() {
  const res = await fetch("http://localhost:4000/recent");
  const data = await res.json();
  return data;
}
export async function getTeachers() {
  const res = await fetch("http://localhost:4000/teachers");
  const data = await res.json();
  return data;
}
