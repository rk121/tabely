import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import EditItem from "./EditItem";

function MenuItem({ category_id, id, name, price, outOfStock, onMenuChange }) {
  const [showEditModal, setShowEditModal] = useState(false);

  const menuItem = {
    category_id,
    id,
    name,
    price,
    outOfStock,
  };

  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{String(outOfStock)}</td>
      <td>
        <Button variant="warning" onClick={handleEditModalShow}>
          Edit
        </Button>
      </td>
      <td>
        <Button
          variant="warning"
          onClick={() => {
            fetch(`/categories/${category_id}/menu_items/${id}`, {
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
          Delete
        </Button>
      </td>
      {showEditModal ? (
        <EditItem
          menuItem={menuItem}
          handleEditModalClose={handleEditModalClose}
          onMenuChange={onMenuChange}
          show={handleEditModalShow}
        />
      ) : (
        ""
      )}
    </tr>
  );
}

export default MenuItem;
