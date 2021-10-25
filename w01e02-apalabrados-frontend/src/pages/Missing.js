import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";

const Missing = ({ title, link_text, page, setMenu }) => {
  return (
    <main
      className="main view"
      onClick={() => {
        setMenu(false);
      }}
    >
      <SubTitle title={title} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Missing };
