"use client";

import { create } from "zustand";
import api from "@/lib/api";

const useProductsStore = create((set) => ({
  products: [],
  total: 0,
  loading: false,

  fetchProducts: async (limit = 10, skip = 0) => {
    set({ loading: true });
    const res = await api.get(
      `/products?limit=${limit}&skip=${skip}`
    );
    set({
      products: res.data.products,
      total: res.data.total,
      loading: false,
    });
  },

  searchProducts: async (query) => {
    set({ loading: true });
    const res = await api.get(`/products/search?q=${query}`);
    set({
      products: res.data.products,
      total: res.data.total,
      loading: false,
    });
  },
}));

export default useProductsStore;
