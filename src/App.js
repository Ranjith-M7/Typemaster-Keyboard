import React from "react";
import "./style.css";

import logo from "./assets/shared/logo.svg";
function App() {
  return (
    <>
      <header>
        <nav>
          <a href="l">
            <img src={logo} height={40} width={40} alt="Typemaster home" />
          </a>
          <button className="button blue">Pre-order now</button>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
