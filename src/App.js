import { useState } from "react";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";

function App() {
  const [name, setName] = useState("Bangladesh");
  return (
    <>
      <Home name={name} setName={setName} />
      <Contact name={name} />
      <About name={name} setName={setName} />
      <Form />
    </>
  );
}

export default App;
