import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddCategory({ show, handleCategoryClose, onMenuChange }) {
  const [formCategory, setFormCategory] = useState("");

  const handleCategoryChange = (e) => setFormCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const category = {
      name: formCategory,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    };

    fetch("/categories", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    onMenuChange();
    handleCategoryClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleCategoryClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category to Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" onChange={handleCategoryChange}>
              <Form.Label>New Category Name</Form.Label>
              <Form.Control type="text" placeholder="Category" required />
            </Form.Group>

            <Button type="submit">Add Category</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategory;
