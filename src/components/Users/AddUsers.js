import React from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button";
const AddUsers = (props) => {
  const addEventHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addEventHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
