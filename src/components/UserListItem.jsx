import './UserListItem.css';

function UserListItem(props) {
  return (
    <div className='user-list-item'> {props.user.name} ({props.user.age} years old)</div>
  )

}

export default UserListItem;