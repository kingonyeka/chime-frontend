import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminWrapper = ({ children }) => {
  const admin_user = useSelector((state) => state.adminUsersState.admin_user);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !admin_user ||
      !admin_user.name ||
      !admin_user.token ||
      !admin_user.rToken
    ) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin_user]);

  if (
    !admin_user ||
    !admin_user.name ||
    !admin_user.token ||
    !admin_user.rToken
  ) {
    return null;
  }

  return <>{children}</>;
};

export default AdminWrapper;
