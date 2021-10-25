import { Title } from "../components/Title";
import { Form } from "../components/Form";
import { Validation } from "../components/Validation";

const Home = ({
  main_title,
  characters,
  setCharacters,
  label_input,
  placeholder_input,
  label_button,
  submitHandle,
  validation,
  setMenu,
}) => {
  return (
    <main
      className="main view"
      onClick={() => {
        setMenu(false);
      }}
    >
      <Title title={main_title} />
      <Form
        characters={characters}
        setCharacters={setCharacters}
        label_input={label_input}
        placeholder_input={placeholder_input}
        label_button={label_button}
        submitHandle={submitHandle}
      />
      <Validation validation={validation} />
    </main>
  );
};

export { Home };
