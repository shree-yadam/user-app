import { useState } from 'react';
import './App.css';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([{name: "Max", age: 31, id: 1}]);

  function handleAddUser(user) {
    setUsers(prev => {
      const newUser = {...user, id: prev[prev.length - 1].id + 1};
      const newUsers = [...prev, newUser];

      return newUsers;
    })
  }

  return (
    <>
      <UserInput addUser={handleAddUser}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
