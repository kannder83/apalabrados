import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import { useEffect } from "react";
import axios from "axios";

const Texts = ({ words, title, link_text, page, setMenu, setWords }) => {
  const URL_API_TEXTS = "https://kannder83.com/api/apalabrados/api/texts";
  const tableTitle = ["Index", "Palabra", "Primera Letra", "Última letra"];

  const listHeader = tableTitle.map((value, index) => {
    return <th key={index}>{value}</th>;
  });

  const listOfText = words.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{value.text}</td>
        <td>{value.start}</td>
        <td>{value.end}</td>
      </tr>
    );
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_TEXTS);
        setWords(response.data);
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
      <Table titleHeader={listHeader} elements={listOfText.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Texts };
