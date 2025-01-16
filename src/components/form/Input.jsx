import S from "./Input.module.css";

function Input({ name, text, placeholder, handleOnChange }) {
  return (
    <div className={S.form_control}>
      <label htmlFor={name} className={S.label}>
        {text}
        <div className={S.tracos}>
          <span></span>
        </div>
      </label>
      <input
        className={S.input}
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
