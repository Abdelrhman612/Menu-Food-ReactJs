import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import ItemsList from "./components/itemsList/ItemsList";
import { useState } from "react";
import { data } from "./Data/Data";

function App() {
  const [itemData, setItemData] = useState(data);
  const AllCategories = ["الكل", ...new Set(data.map((i) => i.Category))];

  const felterByCategory = (name: string) => {
    if (name === "الكل") {
      setItemData(data);
    } else {
      const newArr = data.filter((item) => item.Category === name);
      setItemData(newArr);
    }
  };
  const felterBySearch = (word: string) => {
    if (word !== "") {
      const newArr = data.filter((w) => w.title === word);
      setItemData(newArr);
    }
  };
  return (
    <>
      <div className="color-body font">
        <Container>
          <NavBar felterBySearch={felterBySearch} />
          <Header />
          <Category
            felterByCategory={felterByCategory}
            allCategories={AllCategories}
          />
          <ItemsList itemData={itemData} />
        </Container>
      </div>
    </>
  );
}

export default App;
