import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="color-body font">
        <Container>
          <NavBar />
          <Header />
        </Container>
      </div>
    </>
  );
}

export default App;
