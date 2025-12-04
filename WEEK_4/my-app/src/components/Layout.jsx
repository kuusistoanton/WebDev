import {useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-800">
      <nav className="border-b border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <ul className="flex list-none m-0 p-5">
          <li className="mr-8 float-left">
            <Link to="/" className="font-semibold text-blue-500 hover:text-blue-400 no-underline">Home</Link>
          </li>
          {user && (
            <>
              <li className="mr-8 float-left">
                <Link to="/profile" className="font-semibold text-blue-500 hover:text-blue-400 no-underline">Profile</Link>
              </li>
              <li className="mr-8 float-left">
                <Link to="/upload" className="font-semibold text-blue-500 hover:text-blue-400 no-underline">Upload</Link>
              </li>
              <li className="mr-8 float-left">
                <Link to="/logout" className="font-semibold text-blue-500 hover:text-blue-400 no-underline">Logout</Link>
              </li>
            </>
          )}
          {!user && (
            <li className="mr-8 float-left">
              <Link to="/login" className="font-semibold text-blue-500 hover:text-blue-400 no-underline">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;