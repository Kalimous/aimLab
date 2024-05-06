import { create } from 'zustand';

const useCircleStore = create((set) => ({
    size: 50,
    changeSize: (num) => set(() => ({ size: num }))
}));

const useGameTimeStore = create((set) => ({
    time: 60,
    increase: () => set((state) => ({time: state.time < 100 ? state.time + 5 : state.time})),
    decrease: () => set((state) => ({time: state.time > 0 ? state.time - 5 : state.time}))
}));

export { useCircleStore, useGameTimeStore };
