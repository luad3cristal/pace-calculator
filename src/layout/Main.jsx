import S from "./Main.module.css";

import Input from "../components/input/Input";
import Select from "../components/select/Select";
import Label from "../components/label/Label";

function Main() {
  const distanceChange = () => {};
  const distanceKindChange = () => {};
  const timeChange = () => {};

  return (
    <div className={S.container}>
      <main className={S.main}>
        <section className={S.distance_container}>
          <Label name="distance" text="Distância" />
          <div className={S.distance_box}>
            <Input
              name="distance"
              placeholder="0"
              handleOnChange={distanceChange}
            />
            <Select handleOnChange={distanceKindChange} />
          </div>
        </section>
        {/* <section>
          <Label name="time" text="Tempo" />
          <div className={S.time_box}>
            <Input
              name="time"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
            />
            <Input
              name="time"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
            />
            <Input
              name="time"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
            />
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default Main;
