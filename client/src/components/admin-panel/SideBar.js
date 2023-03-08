import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddItem from "./menu/AddItem";
import Menu from "./menu/Menu";
import Orders from "./orders/Orders";
import AddCategory from "./menu/AddCategory";

function SideBar() {
  const [showItem, setShowItem] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [menu, setMenu] = useState([]);
  const [menuChanged, setMenuChanged] = useState(false);

  const handleItemClose = () => setShowItem(false);
  const handleItemShow = () => setShowItem(true);

  const handleCategoryClose = () => setShowCategory(false);
  const handleCategoryShow = () => setShowCategory(true);

  const onMenuChange = () => setMenuChanged(true);

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
        setMenuChanged(false);
      });
  }, [menuChanged]);

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="menu">Menu</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={handleItemShow}>Add Item</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={handleCategoryShow}>Add Category</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content>
              <Tab.Pane eventKey="orders">
                <Orders />
              </Tab.Pane>
              <Tab.Pane eventKey="menu">
                <Menu menu={menu} onMenuChange={onMenuChange} />
              </Tab.Pane>
              <Tab.Pane eventKey="addItem">
                <AddItem
                  menu={menu}
                  handleItemClose={handleItemClose}
                  show={showItem}
                  onMenuChange={onMenuChange}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="addCategory">
                <AddCategory
                  handleCategoryClose={handleCategoryClose}
                  show={showCategory}
                  onMenuChange={onMenuChange}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default SideBar;
