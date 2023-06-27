import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'store/operations';

function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      pass,
    };
    dispatch(registerUser(sendedObj));
  };

  return (
    <section>
      <h2>Register page</h2>
      <form action="" onSubmit={onFormSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
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
        {errorMessage && <p>This user already exists</p>}
        <button type="submit">Registration</button>
      </form>
    </section>
  );
}

export default RegisterPage;
