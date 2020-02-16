import { Keyboard } from 'react-native';
import axios from 'axios';

//custom
import { store } from '../../store';

//env
import { BASE_URL } from '../../environment';

const state = async () => {
  return await store.getState();
}

const instance = axios.create({
  baseURL: BASE_URL
});

export const dispatchRequest = async (request, hideKeyboard = true) => {
  const _state = await state();

  // instance.defaults.headers.common['Content-Type'] = 'application/vnd.api+json';
  // instance.defaults.headers.common['Accept'] = 'application/vnd.api+json';
  // instance.defaults.headers.common['Authorization'] = _state.auth.token;

  try {
    if (hideKeyboard) {
      Keyboard.dismiss();
    }
    const resource = await instance(request);

    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
}