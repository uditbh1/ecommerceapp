import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  useTheme,
} from "@mui/material";
import { LockClockOutlined } from "@mui/icons-material";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  async function login(event) {
    event.preventDefault();
    const { email, password } = event.target;
    await signIn(email.value, password.value);
    navigate("/");
  }
  return (
    <Container component={"main"} maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          mt: theme.spacing(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <LockClockOutlined />
        </Avatar>
        <Typography component={"h1"} variant="h5">
          Sign In
        </Typography>
        <form
          onSubmit={login}
          sx={{
            width: "100%",
            mt: 1,
          }}
        >
          <TextField
            variant="outlined"
            label="email"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoFocus
            type="email"
            autoComplete="off"
          ></TextField>
          <TextField
            variant="outlined"
            label="password"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            autoFocus
            type="password"
            autoComplete="current-password"
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{
              margin: theme.spacing(3, 0, 2),
            }}
          >
            sign In
          </Button>
        </form>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <Link variant="body2" href="/register">
              New User?Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
