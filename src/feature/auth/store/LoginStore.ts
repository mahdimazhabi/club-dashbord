import { create } from "zustand";

interface LoginStore {
  identifier: string;
  setIndentifier: (identifier: string) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  identifier: "",
  setIndentifier: (identifier: string) =>
    set(() => ({
      identifier,
    })),
}));
