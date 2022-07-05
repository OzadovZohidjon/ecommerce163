import React from "react"; 
import { GlobalFonts } from "./components/GlobalFonts";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyles/>
      <GlobalFonts/>
      <Header/>
    </>
  );
}

export default App;
