import React from "react";
import Table from "react-bootstrap/Table";
import MenuItem from "./MenuItem";
import Button from "react-bootstrap/esm/Button";

function Menu({ menu, onMenuChange }) {
  return (
    <div>
      {menu.map((category) => {
        return (
          <div key={category.name}>
            <h1>{category.name}</h1>
            <Button
              onClick={() => {
                fetch(`/categories/${category.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => {
                    if (!res.ok) throw new Error("Something went wrong...");
                    onMenuChange();
                  })
                  .catch((e) => console.log(e));
              }}
            >
              Delete Category
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Available?</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {category.menu_items.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    categories={category}
                    category_id={item.category_id}
                    name={item.name}
                    price={item.price}
                    outOfStock={item.out_of_stock}
                    onMenuChange={onMenuChange}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
