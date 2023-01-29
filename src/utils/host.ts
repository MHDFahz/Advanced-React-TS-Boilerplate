export const getHost = () => {
  if (window.location.hostname === "localhost") {
    return "https://mhdfahis.ngrok.io";
  }
  return window.location.protocol + "//" + window.location.hostname;
};
