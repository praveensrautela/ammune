import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import { ReactNode } from "react";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
