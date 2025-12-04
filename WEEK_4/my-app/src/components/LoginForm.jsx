import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const {handleLogin} = useUserContext();

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (error) {
      console.log('Login error', error);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  return (
    <>
      <div className="max-w-md mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-6 shadow-md space-y-4">
          <div>
            <label htmlFor="loginuser" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
            <input
              name="username"
              type="text"
              id="loginuser"
              onChange={handleInputChange}
              value={inputs.username}
              autoComplete="username"
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="loginpassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              onChange={handleInputChange}
              value={inputs.password}
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;