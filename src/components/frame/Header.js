import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Market 13</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">로그인</Nav.Link>
            <Nav.Link href="#action2">회원가입</Nav.Link>
            <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">장바구니</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                나의 정보
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                구매한 상품
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                내가 본 상품 목록
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" id="SearchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
  