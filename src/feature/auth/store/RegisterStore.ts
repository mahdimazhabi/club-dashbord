import { create } from "zustand";

interface RegisterState {
  identifier: string;
  authFlowToken: string;
  setRegisterData: (data: {
    identifier: string;
    authFlowToken: string;
  }) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  identifier: "",
  authFlowToken: "",

  setRegisterData: ({ identifier, authFlowToken }) =>
    set({
      identifier,
      authFlowToken,
    }),

  reset: () =>
    set({
      identifier: "",
      authFlowToken: "",
    }),
}));
