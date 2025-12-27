"use client";

import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuthStore from "@/store/authStore";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      await login(form);

      // ✅ login success ke baad redirect
      router.replace("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" mb={2}>
        Admin Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        label="Username"
        margin="normal"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
}
