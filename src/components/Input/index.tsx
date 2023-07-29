import { IDataInput } from "./interface";
import DivInput from "./styles";

const InputMain = ({ label, type, id, placeholder }: IDataInput) => {
  return (
    <DivInput>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} />
    </DivInput>
  );
};

export default InputMain;
