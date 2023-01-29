import { ReportHandler } from "web-vitals";

/**
 * @function reportWebVitals
 * @param {ReportHandler} [onPerfEntry] - A callback function to handle performance entries.
 *
 * This function allows for reporting of web vitals metrics by passing a callback function.
 * The imported `ReportHandler` type from the `web-vitals` library ensures that the callback is correctly typed.
 * The `reportWebVitals` function uses dynamic import to load the necessary metrics functions (CLS, FID, FCP, LCP, TTFB)
 * from the `web-vitals` library and invokes each metric function with the provided `onPerfEntry` callback.
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
