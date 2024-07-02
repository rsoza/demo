import { useEffect, useState } from "react";

const ContextMenu = ({ menuItems, clickedMenu }) => {
  // Changed to position as one state reddit feedback
  const [position, setPosition] = useState();

  useEffect(() => {
    const registerRightClick = (e) => {
      e.preventDefault();
      setPosition({ top: e.clientY, left: e.clientX });
    };
    const clickAnywhere = () => {
      setPosition(undefined);
    };
    document.addEventListener("contextmenu", registerRightClick);
    document.addEventListener("click", clickAnywhere);
    return () => {
      document.removeEventListener("contextmenu", registerRightClick);
      document.removeEventListener("click", clickAnywhere);
    };
  }, []);

  return (
    <>
      {position && (
        <ul
          id="content-menu"
          style={{
            left: `${position.left}px`,
            top: `${position.top}px`
          }}
        >
          {/* Changed to menuItem from i reddit feedback */}
          {menuItems.map((menuItem) => {
            return (
              <li onClick={() => clickedMenu(menuItem)} key={menuItem}>
                {menuItem}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContextMenu;
