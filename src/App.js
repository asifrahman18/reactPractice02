import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/UI/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const userListHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={userListHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
