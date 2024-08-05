import { create } from "zustand";

interface State {
    activeId: number;
    setActiveId: (id: number) => void;
}

export const useSectionStore = create<State>()((set) => ({
    activeId: 1,
    setActiveId: (id) => set({ activeId: id })
}));