import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import {
  getItemStorage,
  removeItemStorage,
  seItemStorage,
} from "./storageProxy";

export const unsetAuthorizatioToken = () =>
  removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token: string) => {
  if (token) {
    seItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
