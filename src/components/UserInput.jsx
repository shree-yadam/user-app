import { useState } from "react";
import "./UserInput.css";

function UserInput(props) {
  const [user, setUser] = useState({ name: "", age: "" });

  /**
   * Form submission event handler
   * @param {*} event
   */
  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted ", user);
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
    <form className="user-input" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" value={user.name} onChange={nameChangeHandler} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" value={user.age} onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInput;
