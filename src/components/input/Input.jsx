import S from "./Input.module.css";

function Input({ name, placeholder, handleOnChange, customClass }) {
  return (
    <div className={S.form_control}>
      <input
        className={`${S.input} ${S[customClass]}`}
        type="number"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
