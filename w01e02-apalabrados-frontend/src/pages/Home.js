import { Title } from "../components/Title";
import { Form } from "../components/Form";

const Home = ({
  main_title,
  characters,
  setCharacters,
  label_input,
  placeholder_input,
  label_button,
  submitHandle,
}) => {
  return (
    <main className="main">
      <Title title={main_title} />
      <Form
        characters={characters}
        setCharacters={setCharacters}
        label_input={label_input}
        placeholder_input={placeholder_input}
        label_button={label_button}
        submitHandle={submitHandle}
      />
    </main>
  );
};

export default Home;
