import { create } from 'zustand/react'
import { CounterState } from 'src/features/Сounter/CounterWithZustand/types'

export const useCounterStore = create<CounterState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
