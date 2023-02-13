import './UserInput.css';

function UserInput(props) {
  function submitHandler(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <form className="user-input" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username"/>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" />
      <button type='submit'>Add User</button>
    </form>
  );
}

export default UserInput;