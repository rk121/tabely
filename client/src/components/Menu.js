import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setMenuItems(data);
      });
  }, []);

  return (
    <div>
      <div className="menu">
        {menuItems.length > 0 ? (
          menuItems.map((item) => {
            console.log(item);
            return (
              <div className="bg-white" key={item.id}>
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">{item.name}</h2>

                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {item.menu_items.map((menu_item) => (
                      <MenuItem
                        key={menu_item.id}
                        id={menu_item.id}
                        name={menu_item.name}
                        price={menu_item.price}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No items found :(</h3>
        )}
      </div>
    </div>
  );
}

export default Menu;
