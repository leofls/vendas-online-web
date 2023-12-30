import axios from "axios";
import { MethodsEnum } from "../../enums/methods.enum";
import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
} from "../../constants/errorsStatus";

export default class ConnectionAPI {
  static async call<T>(
    url: string,
    method: string,
    body?: unknown
  ): Promise<T> {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;

      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;

      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;

      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;

      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;

      default:
        break;
    }
  }

  static async connect(url: string, method: string, body?: unknown) {
    return ConnectionAPI.call(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);

          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectionAPIPost = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};

export const connectionAPIPut = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectionAPIPatch = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};
