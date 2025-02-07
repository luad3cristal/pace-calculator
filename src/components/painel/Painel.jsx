import { useState, useEffect } from "react";
import darkIcon from "../../assets/dark-icon.svg";
import lightIcon from "../../assets/light-icon.svg";
import S from "./Painel.module.css";

const Painel = ({ toggleTheme, lightTheme, time, distance, distanceKind }) => {
  const [pace, setPace] = useState("00:00");

  const paceCalc = () => {
    if (!time || !distance) return;

    const minTotal =
      (time.hr || 0) * 60 + (time.min || 0) + (time.segs || 0) / 60;
    const distancia = distanceKind === "km" ? distance : distance / 1000;

    if (distancia > 0) {
      const paceMin = Math.floor(minTotal / distancia);
      const paceSec = Math.round(((minTotal / distancia) % 1) * 60);
      if (paceMin < 10)
        setPace(`0${paceMin}:${paceSec.toString().padStart(2, "0")}`);
      else 
        setPace(`${paceMin}:${paceSec.toString().padStart(2, "0")}`);
    } else {
      setPace("00:00");
    }
  };

  useEffect(() => {
    paceCalc();
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
          <h2>00:00</h2>
          <span>km/h</span>
        </div>
      </div>
    </section>
  );
};

export default Painel;
