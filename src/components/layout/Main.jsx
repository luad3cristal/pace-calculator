import S from "./Main.module.css";

import Input from "../form/Input";
import Select from "../form/Select";

function Main() {
  const handleChange = () => {};

  return (
    <div className={S.container}>
      <main className={S.main}>
        <div className={S.distance_box}>
          <Input
            name="distance"
            text="Distância"
            placeholder="0"
            handleOnChange={handleChange}
          />
          <Select />
        </div>
      </main>
    </div>
  );
}

export default Main;
