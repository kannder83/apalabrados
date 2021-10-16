import Logo from "../img/libro-de-lectura.png";

const Title = ({ title }) => {
  return (
    <article className="main_section">
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <h1 className="main_title">{title}</h1>
    </article>
  );
};

export { Title };
