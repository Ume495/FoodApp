import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";

import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState("622598");
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
