import { v4 as id } from 'uuid';
import { create } from 'zustand';

type Dikr = {
  id: string;
  text: string;
};
export const useAdrak = create<{
  adkar: Dikr[];
  add: (dirk: Dikr) => void;
  selected: string | null;
  dikrNiya: string | null;
  setDikrNiya: (id: string | null) => void;
  setSelected: (id: string | null) => void;
  getDikr: () => Dikr | null;
  resetDikr: () => void;
  setAdkar: (newOrder: any) => void;
}>((set, get) => ({
  adkar: [
    { text: '   سبحان الله', id: id() },
    { text: '  الحمد لله ', id: id() },
    { text: ' الله أكبر ', id: id() },
    { text: ' لا إله إلا الله', id: id() },
  ],
  add: (dikr: Dikr) => {
    set({ ...get(), adkar: [...get().adkar, dikr] });
  },
  setAdkar: (s: any) => {
    set({ ...get(), adkar: s });
  },
  selected: null,
  setSelected: (id: string | null) => {
    set({ selected: id });
  },

  dikrNiya: null,
  setDikrNiya: (id: string | null) => {
    set({ dikrNiya: id });
  },
  getDikr: (): Dikr | null => {
    const selectedId = get().selected;
    let Dikr: Dikr | null = null;
    if (selectedId) {
      Dikr = get().adkar.find((item) => item.id == selectedId) ?? null;
    }
    return Dikr;
  },
  resetDikr: () => {
    const { setDikrNiya, setSelected } = get();
    setDikrNiya(null);
    setSelected(null);
  },
}));

interface CounterType {
  count: number;
  increment: (by: number | void) => void;
  resetCounter: () => void;
}

export const useCounter = create<CounterType>()((set) => ({
  count: 0,
  resetCounter: () => set({ count: 0 }),
  increment: (by) => set((state) => ({ count: state.count + (by ? by : 1) })),
}));
