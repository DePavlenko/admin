import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { Container, Stack, TextField, Typography, Button } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const isValid = name.trim().length !== 0 && password.trim().length !== 0;

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      signIn();
      navigate('/', { replace: true });
    }
  };

  return (
    <Container
      sx={{
        my: 4,
      }}
    >
      <Stack
        component="form"
        sx={{
          width: '50ch',
          mx: 'auto',
        }}
        spacing={2}
        noValidate
        onSubmit={handleSignIn}
      >
        <Typography variant="h3">Log in</Typography>
        <TextField
          label="Name"
          id="outlined-required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          id="outlined-password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          disabled={!isValid}
          type="submit"
        >
          Sign in
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
