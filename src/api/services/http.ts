import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { saveAs } from "file-saver";
import ApiServiceDataStore from "./data";

/**
 * Returns an object with an `Authorization` property,
 * whose value is a JWT constructed using the provided token.
 *
 * @param {string} token - The token to use in the JWT.
 * @returns {Object} An object with an `Authorization` property.
 */
export function getAuthHeader(token?: string): AxiosRequestHeaders {
  if (!token) {
    return {};
  }
  return {
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Makes a GET request to the specified URL,
 * using the `store` object's `token` property as the `Authorization` header.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} store - An object with a `token` property.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function get<T>(url: string, store?: ApiServiceDataStore) {
  const options: AxiosRequestConfig<any> = {
    headers: {
      ...getAuthHeader(store?.token),
    },
  };
  return axios.get<T>(url, options);
}

/**
 * Makes a POST request to the specified URL,
 * using the provided data as the request body
 * and the `store` object's `token` property as the `Authorization` header.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send in the request body.
 * @param {Object} store - An object with a `token` property.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function post<T = any, U = any>(
  url: string,
  data: U,
  store?: ApiServiceDataStore
) {
  const options: AxiosRequestConfig = {
    data,
    url,
    method: "POST",
    headers: {
      ...getAuthHeader(store?.token),
      "Content-Type": "application/json",
    },
  };
  return axios.post<T>(url, JSON.stringify(data), options);
}

/**
 * Makes a PUT request to the specified URL,
 * using the provided data as the request body
 * and the `store` object's `token` property as the `Authorization` header.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send in the request body.
 * @param {Object} store - An object with a `token` property.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function put<T = any, U = any>(
  url: string,
  data: U,
  store?: ApiServiceDataStore
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(store?.token),
      "Content-Type": "application/json",
    },
  };
  return axios.put<T>(url, JSON.stringify(data), options);
}

/**
 * Makes a DELETE request to the specified URL,
 * using the 'token' property from the provided
 * store object as the 'Authorization' header
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} store - An object with a `token` property.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function remove<T>(url: string, store?: ApiServiceDataStore) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(store?.token),
    },
  };
  return axios.delete<T>(url, options);
}

/**
 * Makes a POST request with a 'multipart/form-data' content-type,
 * using the provided data as the request body,
 * an onUploadProgress function, and the 'token' property
 * from the provided store object as the 'Authorization' header.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send in the request body.
 * @param {function} onUploadProgress - parameter is a callback function that takes in one argument, progressEvent, which is an object that represents the progress of the upload. The progressEvent object contains properties such as loaded and total, which can be used to determine the percentage of the file that has been uploaded.
 * @param {Object} store - An object with a `token` property.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function upload<T>(
  url: string,
  data: FormData,
  onUploadProgress: (progressEvent: any) => void,
  store?: ApiServiceDataStore
) {
  const options: AxiosRequestConfig = {
    onUploadProgress,
    headers: {
      ...getAuthHeader(store?.token),
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post<T>(url, data, options);
}

/**
 * Makes a GET request to the specified URL,
 * using the 'token' property from the provided store
 * object as the 'Authorization' header, and with an optional 'Accept' header.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} store - An object with a `token` property.
 * @param {string} accept - It is an optional string value that represents the Accept header to be sent in the request.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function download(
  url: string,
  store?: ApiServiceDataStore,
  accept?: string
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(store?.token),
      Accept: accept || false,
    },
    responseType: "arraybuffer",
  };
  return axios.get(url, options);
}

/**
 * Makes a POST request to the specified URL with a specified data object,
 * using the 'token' property from the provided
 * store object as the 'Authorization' header, and with an optional 'Accept' header.
 * The response is saved as a file using the 'file-saver' library.
 *
 * @param {string} url - The URL to send the request to.
 * @param {Object} data - The data to send in the request body.
 * @param {Object} store - An object with a `token` property.
 * @param {string} accept - It is an optional string value that represents the Accept header to be sent in the request.
 * @returns {Promise} A promise that resolves to the server's response.
 */
export async function downloadPostData<T>(
  url: string,
  data: T,
  store?: ApiServiceDataStore,
  accept?: string
) {
  const options: AxiosRequestConfig = {
    headers: {
      ...getAuthHeader(store?.token),
      Accept: accept || false,
    },
    responseType: "arraybuffer",
  };
  return axios.post(url, data, options);
}

/**
 * Saves the provided data as a file with the specified file name and type.
 * @param {ArrayBuffer} buffer - The data to save as a file.
 * @param {string} type - The MIME type of the file.
 * @param {string} fileName - The name of the file.
 */
export const saveDownloadedFile = (
  buffer: any,
  type: string,
  fileName: string
) => {
  const data = new Blob([buffer], {
    type,
  });
  saveAs(data, fileName);
};
