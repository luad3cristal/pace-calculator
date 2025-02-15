import S from "./Input.module.css";

function Input({ name, placeholder, handleOnChange, customClass, text }) {
  const handleInputChange = (tempo) => {
    let { name, value } = tempo.target;
    value = Number(value);

    if (value < 0) value = 0;
    if ((name === "min" || name === "segs") && value > 59) value = 0;

    handleOnChange({ target: { name, value } });
  };

  return (
    <div className={S.form_control}>
      <input
        className={`${S.input} ${S[customClass]}`}
        type="number"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {text && <span>{text}</span>}
    </div>
  );
}

export default Input;
