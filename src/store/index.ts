/**
 * @fileOverview A module that exports the store and persistor created by the `configureStore` module
 *
 * @author Fahis <Fahis.skazi@gmail.com>
 * @copyright 2021
 * @license MIT
 *
 * @module store
 * @param {Object} configureStore - The store configuration module.
 */
import configureStore from "./configureStore";

const { store, persistor } = configureStore();

export { store, persistor };
