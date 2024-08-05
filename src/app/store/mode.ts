import { create } from "zustand";

interface State {
    darkMode: boolean;
    switchMode: () => void;
}

export const useModeStore = create<State>()((set) => ({
    darkMode: typeof(window) !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches,
    switchMode: () => set((state) => ({ darkMode: !state.darkMode }))
}));
