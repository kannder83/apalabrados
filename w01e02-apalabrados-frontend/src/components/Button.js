import { Link } from "react-router-dom";

const Button = ({ link_text, page }) => {
  return (
    <button className="button">
      <Link className="links" to={page}>
        {link_text}
      </Link>
    </button>
  );
};

export { Button };
