import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

    // if user is not logged in redirect to login page and if user is admin then redirect to admin dashboard, if common user then redirect to shopping page
    if (location.pathname === "/") {
        if (!isAuthenticated) {
            return <Navigate to="/auth/login" />;   
        } 
        else {
            if (user?.role === "admin") {
                return <Navigate to="/admin/dashboard" />;
            } 
            else {
                return <Navigate to="/shop/home" />;
            }
        }
    }
// if user is not authenticated then redirect to login and register page
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

// if user is authenticated and pathname has login register and  if user is admin then redirect to admin dashboard, if common user then redirect to shopping page  
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
        if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
        } else {
        return <Navigate to="/shop/home" />;
        }
  }

  // if user is authenticated and tries to acccess admin pages then redirect to auth page which says user does not have access to admin pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;