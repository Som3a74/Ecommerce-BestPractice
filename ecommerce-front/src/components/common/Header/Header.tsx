// import { NavLink } from "react-router-dom";
import { HeaderBasket } from "../../eCommerce";
import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import style from "./styles.module.css";
import { NavLink } from "react-router-dom";
const { headerContainer, headerLogo } = style

function Header() {
    return (
        <header>
            <div className={headerContainer}>
                <h1 className={headerLogo}>
                    <span>Our</span> <Badge bg="info">Ecom</Badge>
                </h1>

                <HeaderBasket />
            </div>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="Categories">Categories</Nav.Link>
                            <Nav.Link as={NavLink} to="AboutUs">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="Login">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="register">register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header