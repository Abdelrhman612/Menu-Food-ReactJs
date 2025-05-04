import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Row>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <div className="brand-color">مطعم جديد</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="ابحث.."
                  className="mx-2"
                />
                <button className="btn-search">بحث</button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
};

export default NavBar;
