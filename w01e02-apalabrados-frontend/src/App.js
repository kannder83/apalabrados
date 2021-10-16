import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState("");

  return (
    <div className="App">
      <Header header_title="Prueba técnica" />
      <Home
        main_title="¡Apalabrados!"
        characters={characters}
        setCharacters={setCharacters}
        label_input="Escribe aquí"
        placeholder_input="Caracteres, letras o números..."
      />
      <Footer />
    </div>
  );
}

export default App;
