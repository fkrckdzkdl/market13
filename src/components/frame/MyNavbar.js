import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.module.css';

function MyNavbar() {
    return (
      <div id='nav'>
           <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          카테고리
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">주방</Dropdown.Item>
          <Dropdown.Item href="#">식품</Dropdown.Item>
          <Dropdown.Item href="#">가전</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
        신상품
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
          베스트
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose={false}>
        <Dropdown.Toggle id="dropdown-autoclose-false">
          Manual Close
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
    );
  }
  
  export default MyNavbar;
  