import { Button } from "./Button";

const Validation = ({ validation }) => {
  const validationInfo = (value) => {
    if (value === "Text") {
      return {
        info: "Es un texto.",
        page: "/texts",
        valid: true,
      };
    } else if (value === "Number") {
      return {
        info: "Es un número",
        page: "/numbers",
        valid: true,
      };
    } else if (value === "Character") {
      return {
        info: "Es un caracter especial.",
        page: "/characters",
        valid: true,
      };
    } else if (value === "") {
      return {
        info: "",
        page: "/",
        valid: false,
      };
    } else {
      return {
        info: "No es información válida.",
        page: "/",
        valid: false,
      };
    }
  };

  return (
    <section className="validation">
      <p className="validation_title">{validationInfo(validation).info}</p>
      {validationInfo(validation).valid && (
        <Button
          link_text={"Ver listado"}
          page={validationInfo(validation).page}
        />
      )}
    </section>
  );
};

export { Validation };
