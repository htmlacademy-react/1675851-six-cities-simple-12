import { createContext } from 'react';
import { LocationOffersContext } from './types';

export const Context = createContext<LocationOffersContext | null>(null);
