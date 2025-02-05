import S from "./Main.module.css";

import Input from "../components/input/Input";
import Select from "../components/select/Select";
import Label from "../components/label/Label";
import Painel from "../components/painel/Painel";

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
        <section className={S.time_container}>
          <Label text="Tempo" />
          <div className={S.time_box}>
            <Input
              name="hour"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="hr"
            />
            <Input
              name="minutes"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="min"
            />
            <Input
              name="seconds"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="seg"
            />
          </div>
        </section>
        <section className={S.painel_container}>
          <Painel />
        </section>
      </main>
    </div>
  );
}

export default Main;
