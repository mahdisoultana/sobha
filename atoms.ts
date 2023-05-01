import { atom } from 'recoil';

const overlayAtom = atom({
  key: 'overlayAtom',
  default: {
    isOpen: false,
  },
});
