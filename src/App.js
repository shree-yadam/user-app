import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserList users={[{name: "Max", age: 31, id: 1}]}/>
    </div>
  );
}

export default App;
