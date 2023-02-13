import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([{name: "Max", age: 31, id: 1}]);
  return (
    <div className="App">
      <UserInput />
      <UserList users={users}/>
    </div>
  );
}

export default App;
