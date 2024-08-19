import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Flashcards from "./components/Flashcards/Flashcards";

function App() {
  return (
    <>
      <Header />

      <Form />
      <Flashcards/>
      
      <Footer/>
    </>
  );
}

export default App;
