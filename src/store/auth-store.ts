import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { User } from "../types/responses/login";

export type AuthStore = {
  token: string | null;
  setToken: (accessToken: string) => void;
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
  validateToken: () => boolean;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (accessToken) => {
        set((state) => ({ ...state, token: accessToken }));
      },
      user: null,
      setUser: (user) => {
        set((state) => ({ ...state, user }));
      },
      logout: () => {
        set((state) => ({ ...state, token: null, user: null }));
      },
      validateToken: () => {
        const token = get().token;
        if (!token) return false;

        try {
          const decoded = jwtDecode(token);
          return !!decoded;
        } catch (err) {
          return false;
        }
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  const isValid = useAuthStore((state) => state.validateToken());

  return {
    token,
    isAuthenticated: !!token && isValid,
  };
};

useAuthStore.persist.rehydrate();
