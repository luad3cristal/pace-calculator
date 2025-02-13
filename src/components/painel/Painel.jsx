import { useState, useEffect } from "react";
import darkIcon from "../../assets/dark-icon.svg";
import lightIcon from "../../assets/light-icon.svg";
import S from "./Painel.module.css";

const Painel = ({ toggleTheme, lightTheme, time, distance, distanceKind }) => {
  const [pace, setPace] = useState();
  const [speed, setSpeed] = useState("00:00");

  const paceCalc = (distancia, minutagem) => {
    const paceMin = Math.floor(minutagem / distancia);
    const paceSec = Math.round(((minutagem / distancia) % 1) * 60);

    setPace(
      `${paceMin.toString().padStart(2, "0")}:${paceSec
        .toString()
        .padStart(2, "0")}`
    );
  };

  const speedCalc = (distancia, minutagem) => {
    const velocidade = (distancia / minutagem) * 60;
    const speedMin = Math.floor(velocidade);
    const speedSec = Math.round((velocidade % 1) * 60);

    setSpeed(
      `${speedMin.toString().padStart(2, "0")}:${speedSec
        .toString()
        .padStart(2, "0")}`
    );
  };

  const calculoDistancia = () => {
    //consertar o caso do cálculo de metro
    
    if (!time || !distance) {
      setPace("00:00");
      setSpeed("00:00");
      return;
    }

    const minTotal =
      (time?.hr || 0) * 60 + (time?.min || 0) + (time?.segs || 0) / 60;
    const distancia = distanceKind === "km" ? distance : distance / 1000;

    if (distancia != 0 && minTotal != 0) {
      paceCalc(distancia, minTotal);
      speedCalc(distancia, minTotal);
    } else {
      setPace("00:00");
      setSpeed("00:00");
    }
  };

  useEffect(() => {
    calculoDistancia();
  }, [time, distance, distanceKind]);

  return (
    <section className={S.painel}>
      <button className={S.theme_button} onClick={toggleTheme}>
        <img src={lightTheme ? darkIcon : lightIcon} alt="tema" />
      </button>
      <div className={S.pace_box}>
        <h3>Pace</h3>
        <div>
          <h2>{pace}</h2>
          <span>/km</span>
        </div>
      </div>
      <div className={S.speed_box}>
        <h3>Velocidade</h3>
        <div>
          <h2>{speed}</h2>
          <span>km/h</span>
        </div>
      </div>
    </section>
  );
};

export default Painel;
