import { createAction } from '@reduxjs/toolkit';

export const REDIRECT_ACTION = 'app/redirectToRoute';
export const redirectToRoute = createAction<string>(REDIRECT_ACTION);
