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
  userLogin: (form: ILoginForm) => Promise<void>;
  token?: string | null;
  remove: () => void;
}

export type { ILoginForm, IRegisterForm, IUserContextType, iContext };