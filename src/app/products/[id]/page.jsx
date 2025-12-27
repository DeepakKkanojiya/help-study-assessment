import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Rating,
} from "@mui/material";
import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(
    `https://dummyjson.com/products/${Number(id)}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  // 🔥 IMPORTANT FIX
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography>Product not found</Typography>
        <Link href="/products">
          <Button variant="contained" sx={{ mt: 2 }}>
            Back to Products
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5">{product.title}</Typography>
              <Typography sx={{ my: 1 }}>
                {product.description}
              </Typography>

              <Typography variant="h6">
                Price: ₹ {product.price}
              </Typography>

              <Rating value={product.rating} readOnly />

              <Chip
                label={product.category}
                color="primary"
                sx={{ mt: 1 }}
              />

              <Link href="/products">
                <Button variant="contained" sx={{ mt: 3 }}>
                  Back to Products
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
