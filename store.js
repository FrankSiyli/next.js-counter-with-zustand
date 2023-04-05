import { create } from "zustand";

export const useCounterStore = create((set, get) => ({
  pokemon: [],
  number: 123456,
  increaseCounterNumber: () => set((state) => ({ number: state.number + 1 })),
  decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
  logNumber: () => console.log(get().number),
}));
