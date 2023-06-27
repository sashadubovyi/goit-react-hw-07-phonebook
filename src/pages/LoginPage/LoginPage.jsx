import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/operations';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      email,
      pass,
    };
    dispatch(loginUser(sendedObj));
  };

  return (
    <section>
      <h2>Login page</h2>
      <form action="" onSubmit={onFormSubmit}>
        <label>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="text"
            value={pass}
            onChange={({ target: { value } }) => setPass(value)}
          />
        </label>
        {errorMessage && <p>Incorrect email or password</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginPage;
