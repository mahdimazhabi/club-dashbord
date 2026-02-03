import { Tracking } from "@/interface/tracking";
import { create } from "zustand";

interface TrackingState {
  tracking: Tracking | null;
  setTracking: (tracking: Tracking) => void;
  clearTracking: () => void;
}

const useTrackingStore = create<TrackingState>((set) => ({
  tracking: null,
  setTracking: (tracking: Tracking) => set({ tracking }),
  clearTracking: () => set({ tracking: null }),
}));

export default useTrackingStore;
