import './UserListItem.css';

function UserListItem(props) {

  function formatAge() {
    return `${props.user.age} year${props.user.age != 1?'s':''} old`;
  }

  return (
    <div className='user-list-item'> {props.user.name} ({formatAge()})</div>
  )

}

export default UserListItem;