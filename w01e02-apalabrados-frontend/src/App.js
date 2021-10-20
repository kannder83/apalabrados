import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const API_URL = "http://localhost:8001/api/storedata";
  const [characters, setCharacters] = useState("");

  const submitHandle = async (dataSubmit) => {
    console.log(dataSubmit);
    const OPTIONS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: dataSubmit }),
    };
    const response = await fetch(API_URL, OPTIONS);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <Header header_title="Prueba técnica" />
      <Home
        main_title="¡Apalabrados!"
        characters={characters}
        setCharacters={setCharacters}
        label_input="Escribe aquí"
        placeholder_input="Caracteres, letras o números..."
        label_button="Validar"
        submitHandle={submitHandle}
      />
      <Footer />
    </div>
  );
}

export default App;
