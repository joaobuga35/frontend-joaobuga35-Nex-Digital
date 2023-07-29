import { IDataInput } from "./interface";
import DivInput from "./styles";

const InputMain = ({ label, type, id, placeholder, register }: IDataInput) => {
  return (
    <DivInput>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register}
      />
    </DivInput>
  );
};

export default InputMain;
