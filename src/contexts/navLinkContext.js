import React, { createContext, useContext, useEffect, useState } from "react";

const navLinkContext = createContext();

export const NavLinkProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "true"
  );
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    localStorage.setItem("isSidebarOpen", "true");
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    localStorage.setItem("isSidebarOpen", "false");
  };

  const handleNavLinkClick = () => {
    // Close the sidebar when a nav link is clicked
    closeSidebar();
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("isSidebarOpen");
    if (storedValue !== null) {
      setIsSidebarOpen(storedValue === "true");
    }
  }, []);

  return (
    <navLinkContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId, handleNavLinkClick }}
    >
      {children}
    </navLinkContext.Provider>
  );
};

export const useNavLinkCtx = () => useContext(navLinkContext);
