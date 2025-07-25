// store/useAuthStore.ts
import { create } from 'zustand';

type AuthStore = {
  isLoggedIn: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (user: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  user: null,
  login: (user) => set({ isLoggedIn: true, user }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));
