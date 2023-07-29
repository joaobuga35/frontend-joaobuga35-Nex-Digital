/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigateFunction } from "react-router-dom";

interface iContext {
  children?: React.ReactNode;
}

interface IRegisterForm {
  name: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILoginForm {
  email: string;
  password: string;
}

interface IUserContextType {
  navigate: NavigateFunction;
  userRegister: (form: IRegisterForm) => Promise<void>;
  userLogin: (form: ILoginForm) => Promise<void>;
  token?: string | null;
  name: string | null;
  remove: () => void;
  decoded: any;
}

export type { ILoginForm, IRegisterForm, IUserContextType, iContext };
