import './UserList.css';
import UserListItem from "./UserListItem";

function UserList(props) {
  return (
    <div className="user-list">
      {props.users.map(user => <UserListItem user={user} key={user.id}/>)}
    </div>
  )
}

export default UserList;