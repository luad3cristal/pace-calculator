import S from "./Main.module.css";

import Input from "../form/Input";
import Select from "../form/Select";

function Main() {
  const handleChange = () => {};

  return (
    <main>
      <h1>Hello World!</h1>
      <Input
        name="distance"
        text="Distância"
        placeholder="0"
        handleOnChange={handleChange}
      />
    </main>
  );
}

export default Main;
