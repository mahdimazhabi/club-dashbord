import { create } from "zustand";
import { Inbox } from "@/interface/inbox";
interface InboxState {
  inbox: Inbox | null;
  setInbox: (inbox: Inbox) => void;
  clearInbox: () => void;
}

export const useInboxStore = create<InboxState>((set) => ({
  inbox: null,
  setInbox: (value: Inbox) => set({ inbox: value }),
  clearInbox: () => set({ inbox: null }),
}));
