import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";

import "./App.css";

const [contactSelected, setContactSelected ] = useState(false);

function App() {
  return (
    <div>
      <Nav
        categories = { categories }
        setCurrentCategory= {setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Gallery currentCategory={currentCategory}></Gallery> */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
