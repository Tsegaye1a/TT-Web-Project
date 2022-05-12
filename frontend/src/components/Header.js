import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { Button } from "react-bootstrap";
import { updateUserProfile, logout } from "../actions/userActions";
import { useDispatch } from "react-redux";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  
  };

  const createProductGuestHandler = () => {
    dispatch(createProduct());
    };
  return (
    <header>
      <Navbar bg="light" expand="lg" className="py-2">
      <Container>
          
      <LinkContainer to="/"><Navbar.Brand><h4 class="customFont"><b>Äboshop</b></h4></Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <SearchBox />
            <Nav className="ms-auto">
              {userInfo ? (
                <LinkContainer to="/account">
                  <Button type="submit" variant="outline-info" size="lg" className="px-1 py-1 me-2">Account </Button>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="far fa-user fa-lg"></i>
                  </Nav.Link>
                </LinkContainer>
              )}


           {userInfo  && (
              
              <LinkContainer to="/guest/products">
                <Button type="submit" variant="outline-info" size="lg" className="px-1 py-1 me-2" onClick={createProductGuestHandler} > Add Item </Button>  
              </LinkContainer>
            )}

            {userInfo  && (
                <Button variant="outline-info px-1 py-1 me-2" onClick={logoutHandler}>
                Logout
              </Button>
            )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart fa-lg"></i>{" "}
                  {cartItems.length}
                </Nav.Link>
              </LinkContainer>
            </Nav>
            
            

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/users">
                  <NavDropdown.Item>All Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/products">
                  <NavDropdown.Item>All Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/orders">
                  <NavDropdown.Item>All Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
                        
          </Navbar.Collapse>
           
        </Container>
      </Navbar>
      
    </header>
  );
}

export default Header;
