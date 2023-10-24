import React from "react";
async function getUsers() {
  let data = await fetch("http://localhost:3001/api/users");
  data = await data.json();
  return data;
}
const page = async () => {
  let users = await getUsers();
  return (
    <div>
      USers List
      {users.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};

export default page;
