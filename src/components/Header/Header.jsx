import { useState } from "react";
import { menuItems } from "../../data/Header/menuItems";
import {MegaMenu}
export const Header = ({ activePage }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <header>
      <div>
        <a href={activePage}>modimal</a>
        <nav onMouseLeave={() => setActiveMenu(false)}>
          {menuItems.map((item) => {
            return (
              <div key={item.name} onMouseEnter={() => setActiveMenu(item.name)}>
                <p>{item.name}</p>
                {activeMenu === item.name && item.panel && <MegaMenu panel={item.panel} />}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
