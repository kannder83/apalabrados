import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import { useEffect } from "react";
import axios from "axios";

const Characters = ({ char, title, link_text, page, setMenu, setChar }) => {
  const URL_API_CHARACTERS =
    "https://kannder83.com/api/apalabrados/api/characters";
  const tableTitle = ["Index", "Caracter"];

  const listHeader = tableTitle.map((value, index) => {
    return <th key={index}>{value}</th>;
  });

  const listOfChar = char.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{value.character}</td>
      </tr>
    );
  });



  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_CHARACTERS);
        setChar(response.data);
      } catch (err) {
        if (err.response) {
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
    <main
      className="main scroll"
      onClick={() => {
        setMenu(false);
      }}
    >
      <SubTitle title={title} />
      <Table titleHeader={listHeader} elements={listOfChar.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Characters };
