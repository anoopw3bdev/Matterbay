export const generateUrl = (endpoint) => {
  let baseUrl =
    process?.env.REACT_APP_BASE_URL || "http://localhost:3000/api";
  return `${baseUrl}/${endpoint}`;
};
