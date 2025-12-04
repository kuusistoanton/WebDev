import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const initValues = {
    username: '',
    email: '',
    password: '',
  };

  const {postUser} = useUser();

  const doRegister = async () => {
    try {
      const result = await postUser(inputs);
      console.log('register result', result);
    } catch (err) {
      console.log('Register error', err);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reguser">Username</label>
          <input
            name="username"
            type="text"
            id="reguser"
            onChange={handleInputChange}
            value={inputs.username}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="regemail">Email</label>
          <input
            name="email"
            type="email"
            id="regemail"
            onChange={handleInputChange}
            value={inputs.email}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="regpassword">Password</label>
          <input
            name="password"
            type="password"
            id="regpassword"
            onChange={handleInputChange}
            value={inputs.password}
            autoComplete="new-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
