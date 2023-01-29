/**
 * A module that selects the appropriate store configuration based on the current environment.
 *
 * @module configureStore
 * @param {Object} configureStoreDev - The store configuration for the development environment.
 * @param {Object} configureStoreProd - The store configuration for the production environment.
 */
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

/**
 * Selects the appropriate store configuration based on the current environment.
 *
 * @function
 * @returns {Function} The store configuration function.
 */
const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
