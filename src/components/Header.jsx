import React from "react";
import "../css/Header.css";

const MenuTitle = () => {
  const title = [
    { id: 1, menu: "My Todo List" },
    { id: 2, menu: "React" },
  ];

  return (
    <div>
      <ul className="menu-bar">
        {title.map((item) => {
          return (
            <li key={item.id} className="menu-bar-li">
              {item.menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuTitle;
