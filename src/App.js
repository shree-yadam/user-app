import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

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
    <div className="App">
      <UserInput addUser={handleAddUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
