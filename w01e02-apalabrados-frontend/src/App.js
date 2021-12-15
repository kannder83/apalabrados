import axios from "axios";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Texts } from "./pages/Texts";
import { Numbers } from "./pages/Numbers";
import { Characters } from "./pages/Characters";
import { Missing } from "./pages/Missing";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const API_URL = "https://kannder83.com/api/apalabrados/api/storedata";

  const [reciveData, setReciveData] = useState([]);
  const [characters, setCharacters] = useState("");
  const [menu, setMenu] = useState(false);

  const [numbers, setNumbers] = useState([]);
  const [words, setWords] = useState([]);
  const [char, setChar] = useState([]);
  const [validation, setValidation] = useState("");

  const determinateData = (value) => {
    if (value.number) {
      setValidation("Number");
    } else if (value.character) {
      setValidation("Character");
    } else if (value.text) {
      setValidation("Text");
    } else {
      setValidation("Invalid");
    }
  };

  const submitHandle = async (dataSubmit) => {
    try {
      const response = await axios.post(API_URL, { data: dataSubmit });
      setReciveData(response.data);
      determinateData(response.data);
    } catch (err) {
      if (err.response) {
        setValidation("No válido");
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="App">
      <Header header_title="Prueba técnica" menu={menu} setMenu={setMenu} />
      <Switch>
        <Route exact path="/">
          <Home
            main_title="¡Apalabrados!"
            characters={characters}
            setCharacters={setCharacters}
            label_input="Escribe aquí"
            placeholder_input="Caracteres, letras o números..."
            label_button="Analizar"
            submitHandle={submitHandle}
            reciveData={reciveData}
            validation={validation}
            setMenu={setMenu}
          />
        </Route>
        <Route path="/numbers">
          <Numbers
            numbers={numbers}
            title={"Números"}
            page="/"
            link_text="Regresar"
            setMenu={setMenu}
            setNumbers={setNumbers}
          />
        </Route>
        <Route path="/texts">
          <Texts
            words={words}
            title={"Palabras"}
            page="/"
            link_text="Regresar"
            setMenu={setMenu}
            setWords={setWords}
          />
        </Route>
        <Route path="/characters">
          <Characters
            char={char}
            title={"Caracteres"}
            page="/"
            link_text="Regresar"
            setMenu={setMenu}
            setChar={setChar}
          />
        </Route>
        <Route path="*">
          <Missing
            page="/"
            title="404 - Page Not Found."
            link_text="Regresar"
            setMenu={setMenu}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
