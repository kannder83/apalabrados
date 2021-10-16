const Form = ({
  characters,
  setCharacters,
  label_input,
  placeholder_input,
}) => {
  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="classification">{label_input} </label>
      <input
        type="text"
        id="classification"
        value={characters}
        onChange={(e) => {
          setCharacters(e.target.value);
        }}
        placeholder={placeholder_input}
      />
      <button type="submit" onClick={() => console.log(characters)}>
        Guardar
      </button>
    </form>
  );
};

export { Form };
