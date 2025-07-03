import S from "./Select.module.scss";

function Select({ value, handleOnChange }) {
  return (
    <div>
      <select
        name="distanceKind"
        className={S.select}
        onChange={handleOnChange}
        value={value}
      >
        <option value="km">Km</option>
        <option value="m">M</option>
      </select>
    </div>
  );
}

export default Select;
