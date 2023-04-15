import axios, {AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from './token';
import { statusCodeMap } from '../maps';
import { toast } from 'react-toastify';

export const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => Boolean(statusCodeMap[response.status]);

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
