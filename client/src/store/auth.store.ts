import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profile: any | null;
  isAuthenticated: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setProfile: (profile: any) => void;
  setLogOut: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      isAuthenticated: false,
      setToken: (token: string) =>
        set((state) => ({ ...state, token, isAuthenticated: true })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProfile: (profile: any) => set((state) => ({ ...state, profile })),
      setLogOut: () =>
        set((state) => ({
          ...state,
          token: null,
          profile: null,
          isAuthenticated: false,
        })),
    }),
    {
      name: "auth",
    },
  ),
);

export default useAuthStore;
