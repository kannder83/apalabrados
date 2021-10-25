import { Link } from "react-router-dom";

const Header = ({ header_title, menu, setMenu }) => {
  return (
    <header className="header">
      <p>{header_title}</p>
      <span
        onClick={() => {
          if (menu) {
            setMenu(false);
          } else {
            setMenu(true);
          }
        }}
      >
        &#9776;
      </span>
      <div className="menu" style={{ visibility: menu ? "visible" : "hidden" }}>
        <Link
          className="links menu_link"
          to="/characters"
          onClick={() => setMenu(false)}
        >
          <p>Caracteres</p>
        </Link>
        <Link
          className="links menu_link"
          to="/numbers"
          onClick={() => setMenu(false)}
        >
          <p>Números</p>
        </Link>
        <Link
          className="links menu_link"
          to="/texts"
          onClick={() => setMenu(false)}
        >
          <p>Palabras</p>
        </Link>
        <Link className="links menu_link" to="/" onClick={() => setMenu(false)}>
          <p>Inicio</p>
        </Link>
      </div>
    </header>
  );
};

export { Header };
