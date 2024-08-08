import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const user = useSelector((state) => state.usersState.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/chime-platform");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <div>{children}</div>;
};

export default AuthWrapper;
