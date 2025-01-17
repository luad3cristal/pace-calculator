import S from "./Select.module.css";

function Select({ handleOnChange }) {
  return (
    <div>
      <select name="distance" className={S.select} onChange={handleOnChange}>
        <option value="quilometros">Km</option>
        <option value="metros">M</option>
      </select>
    </div>
  );
}

export default Select;