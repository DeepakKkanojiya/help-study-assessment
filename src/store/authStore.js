"use client";

import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null,

  login: async ({ username, password }) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    // 🔥 THIS IS THE FIX
    localStorage.setItem("token", data.accessToken);

    set({
      user: data,
      token: data.accessToken,
    });

    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useAuthStore;
