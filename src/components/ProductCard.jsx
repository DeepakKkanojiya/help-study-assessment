"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      {/* Product Info */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" noWrap>
          {product.description}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            ₹ {product.price}
          </Typography>

          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
          />
        </Box>
      </CardContent>

      {/* Action */}
      <CardActions>
        <Button
          component={Link}
          href={`/products/${product.id}`}
          variant="contained"
          fullWidth
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
