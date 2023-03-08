import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditItem({ menuItem, handleEditModalClose, show, onMenuChange }) {
  const [formCategory, setFormCategory] = useState(menuItem.category_id);
  const [formName, setFormName] = useState(menuItem.name);
  const [formPrice, setFormPrice] = useState(menuItem.price);
  const [formItemAvailable, setFormItemAvailable] = useState(
    menuItem.outOfStock
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setFormCategory(e.target.value);
  };
  const handleNameChange = (e) => setFormName(e.target.value);
  const handlePriceChange = (e) => setFormPrice(e.target.value);
  const handleAvailabilityChange = (e) =>
    setFormItemAvailable(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedItem = {
      id: menuItem.id,
      category_id: formCategory,
      name: formName,
      price: formPrice,
      out_of_stock:
        formItemAvailable === null || formItemAvailable === ""
          ? false
          : formItemAvailable,
    };

    console.log(editedItem);

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedItem),
    };

    fetch(`/menu_items/${menuItem.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    onMenuChange();
    handleEditModalClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item to Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Category"
                className="mb-3"
                onChange={handleCategoryChange}
                value={formCategory}
                autoFocus
                required
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" onChange={handleNameChange}>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item Name"
                value={formName}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" onChange={handlePriceChange}>
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Item Price"
                value={formPrice}
                step=".01"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" onChange={handleAvailabilityChange}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="In stock?"
                defaultChecked={formItemAvailable}
              />
            </Form.Group>

            <Button type="submit">Edit Item</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditItem;
