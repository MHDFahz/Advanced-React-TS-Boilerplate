import axios from "axios";
import API_DOMAIN from "./apiDomain";

/**
 * Function to add a global response interceptor for handling unauthorized API responses
 * @param {() => void} [onUnauthorizedResponse] - Callback function to handle unauthorized API response
 * @param {string[]} [excludedEndpoints] - List of API endpoints to exclude from unauthorized response handling
 * @returns {void}
 */
export const unauthorizedApiResponseInterceptor = (
  onUnauthorizedResponse?: () => void,
  excludedEndpoints?: string[]
) => {
  axios.interceptors.response.use(undefined, (err) => {
    if (err.response && err.response.status === 401) {
      if (!excludeOn(err, excludedEndpoints) && onUnauthorizedResponse) {
        onUnauthorizedResponse();
      }
    }
    throw err;
  });
};

/**
 * Function to check if a given API endpoint is excluded from unauthorized response handling
 * @param {any} err - The error object from the API response
 * @param {string[]} [list] - List of API endpoints to exclude from unauthorized response handling
 * @returns {boolean} - Returns true if the API endpoint is excluded, false otherwise
 */
export const excludeOn = (err: any, list?: string[]) => {
  if (!list?.length) {
    return false;
  }
  const url = new URL(
    err.response.config.url.replace(API_DOMAIN, ""),
    API_DOMAIN
  );
  return list.includes(url.pathname);
};

export default unauthorizedApiResponseInterceptor;
