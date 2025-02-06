import darkIcon from "../../assets/dark-icon.svg";
import lightIcon from "../../assets/light-icon.svg";
import S from "./Painel.module.css";

const Painel = ({ toggleTheme, lightTheme }) => {
  return (
    <section className={S.painel}>
      <button className={S.theme_button} onClick={toggleTheme}>
        <img src={lightTheme ? darkIcon : lightIcon} alt="tema" />
      </button>
      <div className={S.pace_box}>
        <h3>Pace</h3>
        <div>
          <h2>00:00</h2>
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
