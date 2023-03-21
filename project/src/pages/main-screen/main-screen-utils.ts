import { createContext } from 'react';
import { MainScreenContext } from './main-screen-types';

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const Context = createContext<MainScreenContext | null>(null);
