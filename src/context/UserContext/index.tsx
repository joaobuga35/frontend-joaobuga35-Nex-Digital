/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IUserContextType,
  iContext,
  ILoginForm,
  IRegisterForm,
} from "./interface";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const UserContext = createContext<IUserContextType>({} as IUserContextType);

const UserProvider = ({ children }: iContext) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  let decoded: any = "";
  let name: string = "";
  if (token) {
    decoded = jwt_decode(token!);
    name = decoded.name;
  }

  const remove = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  const userLogin = async (form: ILoginForm) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      const response = await api.post("login", form);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.update(load, {
        render: "Logado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.update(load, {
        render: "Email ou senha incorretos!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const userRegister = async (form: IRegisterForm) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      await api.post("/users", form);
      toast.update(load, {
        render: "Cadastrado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch (error) {
      toast.update(load, {
        render: "Usuário já existente!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        navigate,
        userRegister,
        userLogin,
        token,
        remove,
        name,
        decoded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
