import React, { useState } from "react";

import classes from "./AddUsers.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const addEventHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge === 0) {
      setError({
        title: "Invalid Name and Age",
        message: "Name and Age should not be empty",
      });
      return;
    }

    if (enteredAge < 0) {
      setError({
        title: "Invalid Age Error",
        message: "Enter a valid age (>0)",
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUsers;
