import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";

const Texts = ({ words, title, link_text, page }) => {
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

  return (
    <main className="main scroll">
      <SubTitle title={title} />
      <Table titleHeader={listHeader} elements={listOfText.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Texts };
