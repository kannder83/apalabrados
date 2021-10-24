import axios from "axios";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Texts } from "./pages/Texts";
import { Numbers } from "./pages/Numbers";
import { Characters } from "./pages/Characters";
import { Missing } from "./pages/Missing";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const API_URL = "http://localhost:8001/api/storedata";
  const URL_API_NUMBERS = "http://localhost:8001/api/numbers";
  const URL_API_CHARACTERS = "http://localhost:8001/api/characters";

  const URL_API_TEXTS = "http://localhost:8001/api/texts";
  const [reciveData, setReciveData] = useState([]);
  const [characters, setCharacters] = useState("");

  const [numbers, setNumbers] = useState([]);
  const [words, setWords] = useState([]);
  const [char, setChar] = useState([]);
  const [validation, setValidation] = useState([]);

  const determinateData = (valitation) => {
    if (valitation.number) {
      setValidation("Es un número.");
    } else if (valitation.character) {
      setValidation("Es un carácter especial.");
    } else if (valitation.text) {
      setValidation("Es un texto.");
    } else {
      setValidation("No válido ❌");
    }
  };

  const submitHandle = async (dataSubmit) => {
    try {
      const response = await axios.post(API_URL, { data: dataSubmit });
      setReciveData(response.data);
      console.log(response.data);
      determinateData(response.data);
      setCharacters("");
    } catch (err) {
      if (err.response) {
        setValidation("No válido ❌");
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_NUMBERS);
        setNumbers(response.data);
      } catch (err) {
        if (err.response) {
          setValidation("No válido ❌");
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_TEXTS);
        setWords(response.data);
      } catch (err) {
        if (err.response) {
          setValidation("No válido ❌");
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_CHARACTERS);
        setChar(response.data);
      } catch (err) {
        if (err.response) {
          setValidation("No válido ❌");
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header header_title="Prueba técnica" />
      <Switch>
        <Route exact path="/">
          <Home
            main_title="¡Apalabrados!"
            characters={characters}
            setCharacters={setCharacters}
            label_input="Escribe aquí"
            placeholder_input="Caracteres, letras o números..."
            label_button="Validar"
            submitHandle={submitHandle}
            reciveData={reciveData}
            validation={validation}
          />
        </Route>
        <Route path="/numbers">
          <Numbers
            numbers={numbers}
            title={"Números"}
            page="/"
            link_text="Regresar"
          />
        </Route>
        <Route path="/texts">
          <Texts
            words={words}
            title={"Palabras"}
            page="/"
            link_text="Regresar"
          />
        </Route>
        <Route path="/characters">
          <Characters
            char={char}
            title={"Caracteres"}
            page="/"
            link_text="Regresar"
          />
        </Route>
        <Route path="*">
          <Missing
            page="/"
            title="404 - Page Not Found."
            link_text="Regresar"
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
