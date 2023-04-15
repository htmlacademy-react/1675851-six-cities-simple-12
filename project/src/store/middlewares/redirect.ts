import { Middleware } from 'redux';
import { Reducer } from '../../types/store';
import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';

export const REDIRECT_ACTION = 'app/redirectToRoute';

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === REDIRECT_ACTION) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
