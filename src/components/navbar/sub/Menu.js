import React, { useEffect, useRef } from "react";
import { useNavLinkCtx } from "../../../contexts/navLinkContext";
import navData from "../../utils/utils";

const Menu = () => {
  const { pageId, setPageId } = useNavLinkCtx();
  const currentPage = navData.find((item) => item.pageID === pageId);
  const submenuContainer = useRef(null);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      const submenu = submenuContainer.current;
      if (submenu) {
        const { left, right, bottom } = submenu.getBoundingClientRect();
        const { clientX, clientY } = event;

        if (clientX < left || clientX > right || clientY > bottom) {
          setPageId(null);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseLeave);
    };
  }, [setPageId]);

  return (
    <div
      className={
        currentPage
          ? "submenu show-submenu bg-blue-900 rounded-md text-white"
          : "submenu z-50"
      }
      ref={submenuContainer}
    >
      <div
        className="submenu-links w-full z-50"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
