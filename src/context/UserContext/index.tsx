import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserContextType, iContext, ILoginForm } from "./interface";
import api from "../../services/api";

export const UserContext = createContext<IUserContextType>(
  {} as IUserContextType
);

export const UserProvider = ({ children }: iContext) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const remove = () => {
    localStorage.removeItem("@TOKEN");
  };

  const userLogin = async (form: ILoginForm) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      const response = await api.post("login", form);
      localStorage.setItem("@TOKEN", response.data.accessToken);
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

  return (
    <UserContext.Provider
      value={{
        navigate,
        userLogin,
        token,
        remove,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
