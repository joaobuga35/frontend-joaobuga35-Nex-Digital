import { Link } from "react-router-dom";
import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import { ButtonBlue } from "../../styles/Button/buttons";
import { DivMissingPassword, MainLogin } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginData, loginSchema } from "../../schemas/user.schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useContext(UserContext);

  const submit = async (formData: loginData) => {
    await userLogin(formData);
  };

  return (
    <>
      <MainLogin>
        <section>
          <Logo top={"110px"} bottom={"58px"} logoposition={"login"} />
          <h2>Dados de acesso</h2>

          <form noValidate onSubmit={handleSubmit(submit)}>
            <InputMain
              label={"E-mail"}
              type={"email"}
              id={"email"}
              placeholder={"Insira seu e-mail"}
              register={register("email")}
            />
            {errors.email && <p className="errors">{errors.email.message}</p>}
            <InputMain
              label={"Senha"}
              type={"password"}
              id={"password"}
              placeholder={"Insira sua senha"}
              register={register("password")}
            />
            {errors.password && (
              <p className="errors">{errors.password.message}</p>
            )}
            <DivMissingPassword>
              <Link to={"/register"}>Cadastre-se</Link>
              <ButtonBlue
                type="submit"
                width={"100%"}
                height={"55px"}
                top={"45px"}
              >
                Entrar
              </ButtonBlue>
            </DivMissingPassword>
          </form>
        </section>
      </MainLogin>
    </>
  );
};

export default Login;
