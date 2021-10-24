import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";

const Characters = ({ char, title, link_text, page }) => {
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

  return (
    <main className="main scroll">
      <SubTitle title={title} />
      <Table titleHeader={listHeader} elements={listOfChar.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Characters };
