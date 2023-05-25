import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/AuthOperations';
import 'react-toastify/dist/ReactToastify.css';
import { LoginForm, Title, Label, TitleInput, Input, Button } from './Login.styled';

export const Registration = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = state;
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(state));
    setDisabled(true);
  };

  useEffect(() => {
    if (email && password && name) setDisabled(false);
  }, [email, password, name]);

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Sign Up</Title>
        <Label>
          <TitleInput>Name</TitleInput>
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          <TitleInput>E-mail</TitleInput>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          <TitleInput>Password</TitleInput>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit" disabled={disabled}>
          Sign up
        </Button>
      </LoginForm>
    </div>
  );
};
