import React, { useState } from "react";

import classes from "./AddUsers.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const addEventHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge === 0) {
      return;
    }

    if (enteredAge < 0) {
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setAge("");
    setUserName("");
  };

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addEventHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={UserNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={AgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
