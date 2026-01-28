// Auth Service
export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

export const redirectToDashboard = () => {
  return "/dashboard";
};

export const redirectToLogin = () => {
  return "/login";
};