"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Pagination,
} from "@mui/material";
import useProductsStore from "@/store/productsStore";
import ProductCard from "@/components/ProductCard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductsPage() {
  const { products, total, fetchProducts, searchProducts } =
    useProductsStore();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 10;
  const totalPages = Math.ceil((total || 0) / limit);

  // 🔹 Fetch products on load & page change
  useEffect(() => {
    fetchProducts(limit, (page - 1) * limit);
  }, [page]);

  // 🔹 Search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      fetchProducts(limit, (page - 1) * limit);
    } else {
      searchProducts(value);
    }
  };

  return (
    <ProtectedRoute>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>

        {/* 🔍 Search */}
        <TextField
          fullWidth
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          sx={{ mb: 3 }}
        />

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {/* 📄 Pagination */}
        {totalPages > 1 && search === "" && (
          <Pagination
            sx={{ mt: 4, display: "flex", justifyContent: "center" }}
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        )}
      </Container>
    </ProtectedRoute>
  );
}
