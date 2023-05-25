import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/AuthOperations';
import { LoginForm, Title, Label, TitleInput, Input, Button } from './Login.styled';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value.trim());

        break;
      case 'password':
        setPassword(e.target.value.trim());

        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    setDisabled(true);
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (email && password) setDisabled(false);
  }, [email, password]);

  return (
    <>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Login</Title>
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
          Log in
        </Button>
      </LoginForm>
    </>
  );
};
