import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import ItemsList from "./components/Cartitems/ItemsList";

function App() {
  return (
    <>
      <div className="color-body font">
        <Container>
          <NavBar />
          <Header />
          <Category />
          <ItemsList />
        </Container>
      </div>
    </>
  );
}

export default App;
