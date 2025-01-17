import S from "./Label.module.css";

const Label = ({ name, text }) => {
  return (
    <div>
      <label htmlFor={name} className={S.label}>
        {text}
        <div className={S.tracos}>
          <span></span>
        </div>
      </label>
    </div>
  );
};

export default Label;
