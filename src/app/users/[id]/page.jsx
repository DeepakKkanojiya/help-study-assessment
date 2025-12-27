import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(
    `https://dummyjson.com/users/${Number(id)}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function UserDetailPage({ params }) {
  // 🔥 IMPORTANT FIX
  const { id } = await params;

  const user = await getUser(id);

  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>User not found</Typography>
        <Link href="/users">
          <Button variant="contained" sx={{ mt: 2 }}>
            Back to Users
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h5">
              {user.firstName} {user.lastName}
            </Typography>

            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Gender: {user.gender}</Typography>
            <Typography>Age: {user.age}</Typography>

            <Typography>
              Company: {user.company?.name}
            </Typography>

            <Typography>
              Address: {user.address?.address}, {user.address?.city}
            </Typography>

            <Link href="/users">
              <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                Back to Users
              </Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
