import S from "./Select.module.css";

function Select() {
  return (
    <div>
      <select name="distance">
        <option value="km">Km</option>
        <option value="M">M</option>
      </select>
    </div>
  );
}

export default Select;
