import S from "./Input.module.css";

function Input({ name, placeholder, handleOnChange, customClass, text }) {
  //checar se o tempo tá passando de 60

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
      {text && <span>{text}</span>}
    </div>
  );
}

export default Input;
