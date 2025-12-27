import ProtectedRoute from "@/components/ProtectedRoute";
import { Container, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Container>
        <Typography variant="h4">Dashboard</Typography>
        <Typography>Welcome Admin</Typography>
      </Container>
    </ProtectedRoute>
  );
}
