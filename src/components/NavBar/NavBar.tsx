import { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { NavBarProps } from "./interFace";

const NavBar = ({ felterBySearch }: NavBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue !== "") {
      felterBySearch(searchValue);
    } else {
      alert("يرجى ادخال كلمة البحث");
    }
    setSearchValue("");
  };
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
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button
                  onClick={(e) =>
                    onSearch(e as unknown as React.FormEvent<HTMLFormElement>)
                  }
                  className="btn-search"
                >
                  بحث
                </button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </div>
  );
};

export default NavBar;
