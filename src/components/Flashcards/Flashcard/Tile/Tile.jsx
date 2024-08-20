
export default function Tile() {
    return (
      <>
   <section>
abcde
   </section>
      </>

    );

  }
  
//create a section 
//this has styles of clicked and unlciked/ question/answer
//click on section it will show answer (similar to menu button)
  const faq = [
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using `createElement()` or `appendChild()`.",
    },
    {
      question: "How do you create a React component?",
      answer:
        "You can create a React component either as a function or as a class. Function components are simple JavaScript functions, while class components require extending `React.Component`.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the actual DOM. React uses the virtual DOM to determine which elements need to be updated, making updates more efficient.",
    },
  ];

  const abcde =faq[0].question;