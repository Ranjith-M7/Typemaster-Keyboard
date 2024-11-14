import React from "react";
import "./style.css";

import logo from "./assets/shared/logo.svg";
function App() {
  return (
    <>
      <header className="grid-main">
        <nav className="grid-content topnav">
          <a href="1">
            <img src={logo} height={40} width={40} alt="Typemaster home" />
          </a>
          <button className="button blue">Pre-order now</button>
        </nav>
      </header>
      <main>
        <section className="grid-main hero">
          <div className="grid-content">
            <div className="hero-text">
              <h1>Typemaster Keyboard</h1>
              <p>
                Improve your productivity and gaming without breaking the bank.
                Upgrade to a high quality mechanical typing experience.
              </p>
              <div className="">
                <button className="button orange">Pre-order now</button>
                <p>Release on 5/27</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
