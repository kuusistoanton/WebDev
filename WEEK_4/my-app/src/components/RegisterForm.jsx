import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';

const RegisterForm = () => {
  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const {handleRegister} = useUserContext();

  const doRegister = async () => {
    try {
      await handleRegister(inputs);
    } catch (err) {
      console.log('Register error', err);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <>
      <div className="max-w-md mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">Register</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-6 shadow-md space-y-4">
          <div>
            <label htmlFor="reguser" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
            <input
              name="username"
              type="text"
              id="reguser"
              onChange={handleInputChange}
              value={inputs.username}
              autoComplete="username"
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="regemail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              name="email"
              type="email"
              id="regemail"
              onChange={handleInputChange}
              value={inputs.email}
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="regpassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              name="password"
              type="password"
              id="regpassword"
              onChange={handleInputChange}
              value={inputs.password}
              autoComplete="new-password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;