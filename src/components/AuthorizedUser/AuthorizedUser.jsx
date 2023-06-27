import { useSelector } from 'react-redux';

const defaultUserImg = '';

function AuthorizedUser() {
  const userName = useSelector(state => state.auth.user.name);

  return (
    <div>
      <img src={defaultUserImg} alt="" />
      <p>{userName}</p>
      <button>Log Out</button>
    </div>
  );
}

export default AuthorizedUser;
