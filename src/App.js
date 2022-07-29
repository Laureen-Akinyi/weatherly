import React from "react";
import CitySelector from "./components/CitySelector";
import UseFetch from "./hooks/UseFetch";
import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;
