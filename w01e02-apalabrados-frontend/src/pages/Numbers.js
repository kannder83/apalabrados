import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";
import { useEffect } from "react";
import axios from "axios";

const Numbers = ({ numbers, title, link_text, page, setMenu, setNumbers }) => {
  const URL_API_NUMBERS =
    "https://portfolio.kannder83.com/apalabrados/api/numbers";

  const tableTitle = ["Index", "Numero", "Acumulado"];

  const listHeader = tableTitle.map((value, index) => {
    return <th key={index}>{value}</th>;
  });

  const listOfNumbers = numbers.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{value.number}</td>
        <td>{value.accumulated}</td>
      </tr>
    );
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL_API_NUMBERS);
        setNumbers(response.data);
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
      <Table titleHeader={listHeader} elements={listOfNumbers.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Numbers };
