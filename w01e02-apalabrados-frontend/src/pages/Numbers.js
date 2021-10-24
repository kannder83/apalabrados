import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";
import { Table } from "../components/Table";

const Numbers = ({ numbers, title, link_text, page }) => {
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

  return (
    <main className="main scroll">
      <SubTitle title={title} />
      <Table titleHeader={listHeader} elements={listOfNumbers.reverse()} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Numbers };
