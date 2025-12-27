import { create } from "zustand";
import api from "@/lib/api";

const useUsersStore = create((set, get) => ({
  users: [],
  total: 0,
  loading: false,

  fetchUsers: async (limit = 10, skip = 0) => {
    set({ loading: true });
    const res = await api.get(`/users?limit=${limit}&skip=${skip}`);
    set({ users: res.data.users, total: res.data.total, loading: false });
  },

  searchUsers: async (query) => {
    set({ loading: true });
    const res = await api.get(`/users/search?q=${query}`);
    set({ users: res.data.users, loading: false });
  },
}));

export default useUsersStore;
