import ConfigDev from "./config.dev";
import ConfigProd from "./config.prod";

const root = process.env.NODE_ENV === "production" ? ConfigProd : ConfigDev;

/**
 * The default export of the module.
 *
 * @type {React.Component} The `RootDev` or `RootProd` component, depending on the value of the `NODE_ENV` environment variable.
 */
export default root;
