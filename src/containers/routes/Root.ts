import RootDev from "./Root.dev";
import RootProd from "./Root.prod";

/**
 * A function that returns either the `RootDev` or `RootProd` component, depending on the value of the `NODE_ENV` environment variable.
 *
 * @return {React.Component} The `RootDev` component if the `NODE_ENV` environment variable is not `'production'`, or the `RootProd` component if it is.
 */
const root = process.env.NODE_ENV === "production" ? RootProd : RootDev;

/**
 * The default export of the module.
 *
 * @type {React.Component} The `RootDev` or `RootProd` component, depending on the value of the `NODE_ENV` environment variable.
 */
export default root;
