const Table = ({ titleHeader, elements }) => {
  return (
    <table>
      <thead>
        <tr>{titleHeader}</tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};

export { Table };
