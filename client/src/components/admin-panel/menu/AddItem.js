import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddItem({ show, handleItemClose, menu, onMenuChange }) {
  const [formCategory, setFormCategory] = useState("");
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formItemAvailable, setFormItemAvailable] = useState("");

  const handleCategoryChange = (e) => setFormCategory(e.target.value);
  const handleNameChange = (e) => setFormName(e.target.value);
  const handlePriceChange = (e) => setFormPrice(e.target.value);
  const handleAvailabilityChange = (e) =>
    setFormItemAvailable(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const menuItem = {
      name: formName,
      price: formPrice,
      out_of_stock:
        formItemAvailable === null || formItemAvailable === ""
          ? false
          : formItemAvailable,
    };

    console.log(menuItem);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menuItem),
    };

    fetch(`/categories/${formCategory}/menu_items`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    onMenuChange();
    handleItemClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleItemClose}>
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
                autoFocus
                required
              >
                <option selected disabled value="">
                  Select category from below
                </option>
                {menu.map((category) => (
                  <option key={category.name} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" onChange={handleNameChange}>
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Item Name" required />
            </Form.Group>

            <Form.Group className="mb-3" onChange={handlePriceChange}>
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Item Price"
                step=".01"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" onChange={handleAvailabilityChange}>
              <Form.Label>Item Price</Form.Label>
              <Form.Check type="switch" id="custom-switch" label="In stock?" />
            </Form.Group>

            <Button type="submit">Add Item</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleItemClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
