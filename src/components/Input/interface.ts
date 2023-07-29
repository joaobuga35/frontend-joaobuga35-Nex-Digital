import { UseFormRegisterReturn } from "react-hook-form";

interface IDataInput {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
}

export type { IDataInput };
