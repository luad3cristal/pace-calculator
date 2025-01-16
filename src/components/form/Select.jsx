import S from "./Select.module.css";

function Select() {
  return (
    <div>
      <select name="distance" className={S.select}>
        <option value="quilometros">Km</option>
        <option value="metros">M</option>
      </select>
    </div>
  );
}

export default Select;
