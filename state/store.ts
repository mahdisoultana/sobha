import { v4 as id } from 'uuid';
import { create } from 'zustand';

export const initAdkar = [
  { text: 'سبحان الله', id: id() },
  { text: 'الحمد لله', id: id() },
  { text: 'الله أكبر', id: id() },
  { text: 'لا إله إلا الله', id: id() },
  {
    text: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
    id: id(),
  },
  { text: 'سبحان الله وبحمده سبحان الله العظيم', id: id() },
  { text: 'أستغفر الله', id: id() },
  { text: 'لا حول ولا قوة إلا بالله', id: id() },
  { text: 'اللهم صل على محمد', id: id() },
  { text: 'سبحان الله وبحمده', id: id() },
  { text: 'اللهم إني أسألك العفو والعافية', id: id() },
  { text: 'يا حي يا قيوم برحمتك أستغيث', id: id() },
  { text: 'رب اغفر لي ولوالدي', id: id() },
  { text: 'اللهم بارك لنا فيما رزقتنا', id: id() },
  { text: 'حسبنا الله ونعم الوكيل', id: id() },
  { text: 'اللهم اهدنا فيمن هديت', id: id() },
  { text: 'اللهم إني أعوذ بك من الهم والحزن', id: id() },
  { text: 'اللهم افتح لي أبواب رحمتك', id: id() },
  { text: 'ربي زدني علما', id: id() },
  { text: 'اللهم إني أسألك الجنة وأعوذ بك من النار', id: id() },
  {
    text: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
    id: id(),
  },
  { text: 'اللهم إني أعوذ بك من العجز والكسل', id: id() },
  { text: 'اللهم اشرح لي صدري ويسر لي أمري', id: id() },
  { text: 'رب اجعلني مقيم الصلاة ومن ذريتي', id: id() },
  { text: 'اللهم إنك عفو تحب العفو فاعف عني', id: id() },
  { text: 'يا مقلب القلوب ثبت قلبي على دينك', id: id() },
];

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
  adkar: initAdkar,
  addDikr: (dikr: Dikr) => {
    window.localStorage?.setItem(
      'adkar',
      JSON.stringify([...get().adkar, dikr]),
    );
    set({ ...get(), adkar: [...get().adkar, dikr] });
  },
  setAdkar: (dikr: Dikr[] | ((dikr: Dikr[]) => Dikr[])) => {
    set({
      ...get(),
      adkar: typeof dikr == 'function' ? dikr(get().adkar) : dikr,
    });
    window.localStorage?.setItem('adkar', JSON.stringify([...get().adkar]));
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
