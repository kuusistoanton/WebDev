import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const LoginForm = () => {
    const initValues = {
    username: '',
    password: '',
    };
    
        const {postLogin} = useAuthentication();
        const navigate = useNavigate();

        const doLogin = async () => {
        try {
            const result = await postLogin(inputs);
            // extract token from common response shapes
            let token = null;
            if (result) {
                if (typeof result === 'string') token = result;
                else token = result.token ?? result.access_token ?? result.accessToken ?? result.data?.token;
            }
            if (token) {
                localStorage.setItem('token', token);
            }
            navigate('/');
        } catch (error) {
            console.log('Login error', error);
        }
        };
    
    const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);
    
    console.log(inputs);
     return (
         <>
             <h1>Login</h1>
             <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="loginuser">Username</label>
                     <input
                         name="username"
                         type="text"
                         id="loginuser"
                        onChange={handleInputChange}
                        value={inputs.username}
                         autoComplete="username"
                     />
                 </div>
                 <div>
                     <label htmlFor="loginpassword">Password</label>
                      <input
                         name="password"
                         type="password"
                         id="loginpassword"
                        onChange={handleInputChange}
                        value={inputs.password}
                         autoComplete="current-password"
                     />
                 </div>
                 <button type="submit">Login</button>
             </form>
         </>
     );
};

export default LoginForm;