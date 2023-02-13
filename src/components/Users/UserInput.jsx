import { useState } from "react";
import Button from "../UI/Button";
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
    if(user.name.trim().length === 0 || user.age.trim().length === 0) {
      return;
    }
    
    if(+user.age < 1) {
      return;
    }
    props.addUser({name: user.name, age: Number(user.age)});
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
      const newUser = { ...prev, age: event.target.value };
      return newUser;
    });
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={user.name} onChange={nameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={user.age} type='number' onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default UserInput;
