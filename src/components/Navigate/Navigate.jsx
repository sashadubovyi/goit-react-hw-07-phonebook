const { NavLink } = require('react-router-dom');

function Navigate() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigate;
