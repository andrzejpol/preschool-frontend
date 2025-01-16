import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const RoleBasedRoute = ({children, allowedRoles}) => {
  const {userRole} = useSelector(state => state.userData);

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard/not-authorized" replace/>;
  }

  return children;
};

export default RoleBasedRoute;
