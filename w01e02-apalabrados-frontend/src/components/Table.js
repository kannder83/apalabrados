const Table = ({ titleHeader, elements }) => {
  return (
    <table className="table">
      <thead className="table_title">
        <tr className="table_title_col">{titleHeader}</tr>
      </thead>
      <tbody className="table_rows">{elements}</tbody>
    </table>
  );
};

export { Table };
