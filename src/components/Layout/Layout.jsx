import AuthorizedUser from 'components/AuthorizedUser/AuthorizedUser';
import LogNavigate from 'components/LogNavigate/LogNavigate';
import Navigate from 'components/Navigate/Navigate';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <header>
        <Navigate />
        {isLoggedIn && <AuthorizedUser />}
        {!isLoggedIn && <LogNavigate />}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
