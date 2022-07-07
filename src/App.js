import React from "react"; 
import { GlobalFonts } from "./components/GlobalFonts";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles/>
      <GlobalFonts/>
      <Header/>
      <AppLayout/>
    </>
  );
}

export default App;
