import create from 'zustand'

export const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  en: [],
  update: (data) => set(state => ({ en: [...state.en, data] })),
  meaning: [],
  updateMeaning: (data) => set(state => ({ meaning: [...state.meaning, data] }))
}))