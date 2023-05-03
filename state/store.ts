import { v4 as id } from 'uuid';
import { create } from 'zustand';

type Dikr = {
  id: string;
  text: string;
};
export const useAdrak = create<{
  editMode: boolean;
  adkar: Dikr[];
  addDikr: (dirk: Dikr) => void;
  selected: string | null;
  dikrNiya: string | null;
  setDikrNiya: (id: string | null) => void;
  setSelected: (id: string | null) => void;
  getDikr: () => Dikr | null;
  resetDikr: () => void;
  setAdkar: (dikr: Dikr[] | ((dikr: Dikr[]) => Dikr[])) => void;
  setEditMode: (mode: boolean | ((mode: boolean) => boolean)) => void;
}>((set, get) => ({
  editMode: false,
  setEditMode: (mode) => {
    set({ editMode: typeof mode == 'function' ? mode(get().editMode) : mode });
  },
  adkar: [
    { text: '   سبحان الله', id: id() },
    { text: '  الحمد لله ', id: id() },
    { text: ' الله أكبر ', id: id() },
    { text: ' لا إله إلا الله', id: id() },
    { text: ' سبحان الله وبحمده سبحان الله العظيم', id: id() },
  ],
  addDikr: (dikr: Dikr) => {
    set({ ...get(), adkar: [...get().adkar, dikr] });
  },
  setAdkar: (dikr: Dikr[] | ((dikr: Dikr[]) => Dikr[])) => {
    set({
      ...get(),
      adkar: typeof dikr == 'function' ? dikr(get().adkar) : dikr,
    });
  },
  selected: null,
  setSelected: (id: string | null) => {
    // only make the app work normally if we not in edit mode
    if (!get().editMode) set({ selected: id });
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
