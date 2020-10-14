import React from "react";
import Header from "./Header";
import newEmo from "./NewEmoji";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header/>
      <dl className="dictionary">
          {emojipedia.map(newEmo)}
      </dl>
        <Footer/>
    </div>
  );
}

export default App;
