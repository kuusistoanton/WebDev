import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div style={{marginBottom: 12}}>
        <button onClick={() => setShowRegister((s) => !s)}>
          {showRegister ? 'Show Login' : 'Show Register'}
        </button>
      </div>
      {showRegister ? <RegisterForm /> : <LoginForm />}
    </>
  );
};

export default Login;