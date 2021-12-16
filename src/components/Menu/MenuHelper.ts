import { RiDownloadLine, RiHomeLine, RiShieldCheckLine } from 'react-icons/ri';

export const MENU_ITEMS = [
  {
    name: 'Inicio',
    icon: RiHomeLine,
    path: '/',
  },
  {
    name: 'Baixando',
    icon: RiDownloadLine,
    path: '/downloading',
    navTip: {
      count: 3,
    },
  },
  {
    name: 'Biblioteca',
    icon: RiShieldCheckLine,
    path: '/library',
  },
];
