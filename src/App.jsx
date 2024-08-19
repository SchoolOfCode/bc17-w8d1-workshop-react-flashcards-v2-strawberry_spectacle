import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Flashcards from "./components/Flashcards/Flashcards";

function App() {
  
    // cons= [flashcardBank, setFlashcardBank] = useState ([
      
    //     { question: "What is JSX?", 
    //       answer: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using `createElement()` or `appendChild()`." }, 
    //     { question: "How do you create a React component?", 
    //       answer: "You can create a React component either as a function or as a class. Function components are simple JavaScript functions, while class components require extending `React.Component`." }, 
    //     { question: "What is the virtual DOM?", 
    //       answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses the virtual DOM to determine which elements need to be updated, making updates more efficient." }
    // ])

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
