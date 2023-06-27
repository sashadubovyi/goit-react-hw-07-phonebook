import { NavLink } from 'react-router-dom';

function LogNavigate() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </>
  );
}

export default LogNavigate;
