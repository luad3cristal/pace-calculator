import { useState, useEffect } from "react";
import S from "./Main.module.css";

import Input from "../components/input/Input";
import Select from "../components/select/Select";
import Label from "../components/label/Label";
import Painel from "../components/painel/Painel";

function Main() {
  const [lightTheme, setLightTheme] = useState(true);
  const [distance, setDistance] = useState(0);
  const [distanceKind, setDistanceKind] = useState("km");
  const [time, setTime] = useState({ hr: 0, min: 0, segs: 0 });

  const distanceChange = (distancia) => {
    setDistance(Number(distancia.target.value) || 0);
  };

  const distanceKindChange = (event) => {
    setDistanceKind(event.target.value);
  };

  const timeChange = (tempo) => {
    const { name, value } = tempo.target;
    setTime((timePrev) => ({
      ...timePrev,
      [name]: Number(value),
    }));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

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
            <Select value={distanceKind} handleOnChange={distanceKindChange} />
          </div>
        </section>
        <section className={S.time_container}>
          <Label text="Tempo" />
          <div className={S.time_box}>
            <Input
              name="hr"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="hr"
            />
            <Input
              name="min"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="min"
              max="59"
            />
            <Input
              name="segs"
              placeholder="0"
              handleOnChange={timeChange}
              customClass="time_input"
              text="seg"
              max="59"
            />
          </div>
        </section>
        <section className={S.painel_container}>
          <Painel
            toggleTheme={toggleTheme}
            lightTheme={lightTheme}
            time={time}
            distance={distance}
            distanceKind={distanceKind}
          />
        </section>
      </main>
    </div>
  );
}

export default Main;
