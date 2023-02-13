import "./UserList.css";
import UserListItem from "./UserListItem";
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className="users">
      {props.users.map((user) => (
        <UserListItem user={user} key={user.id} />
      ))}
    </Card>
  );
}

export default UserList;
