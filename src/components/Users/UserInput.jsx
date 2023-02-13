import { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";

function UserInput(props) {
  const [user, setUser] = useState({ name: "", age: "" });

  /**
   * Form submission event handler
   * @param {*} event
   */
  function submitHandler(event) {
    event.preventDefault();
    props.addUser(user);
    setUser({ name: "", age: "" });
  }

  /**
   * Name change event handler
   * @param {*} event
   */
  function nameChangeHandler(event) {
    setUser((prev) => {
      const newUser = { ...prev, name: event.target.value };
      return newUser;
    });
  }

  /**
   * Age change event handler
   * @param {*} event
   */
  function ageChangeHandler(event) {
    setUser((prev) => {
      const newUser = { ...prev, age: Number(event.target.value) };
      return newUser;
    });
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={user.name} onChange={nameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={user.age} onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default UserInput;
