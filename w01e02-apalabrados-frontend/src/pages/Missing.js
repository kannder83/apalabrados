import { SubTitle } from "../components/SubTitle";
import { Button } from "../components/Button";

const Missing = ({ title, link_text, page }) => {
  return (
    <main className="main view">
      <SubTitle title={title} />
      <Button link_text={link_text} page={page} />
    </main>
  );
};

export { Missing };
