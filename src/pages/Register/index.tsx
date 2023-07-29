import { Link } from "react-router-dom";
import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import { ButtonBlue } from "../../styles/Button/buttons";
import { MainContent, FormColumn, CenteredButton } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userData, userSchema } from "../../schemas/user.schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit = async (formData: userData) => {
    await userRegister(formData);
  };

  return (
    <>
      <MainContent>
        <section>
          <Logo top={"32px"} />
          <h2>Cadastro</h2>

          <form noValidate onSubmit={handleSubmit(submit)}>
            <FormColumn>
              <InputMain
                label={"Nome"}
                type={"text"}
                id={"name"}
                placeholder={"Insira seu nome"}
                register={register("name")}
              />
              {errors.name && <p className="errors">{errors.name.message}</p>}
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"CPF"}
                type={"cpf"}
                id={"cpf"}
                placeholder={"Insira seu CPF"}
                register={register("cpf")}
              />
              {errors.cpf && <p className="errors">{errors.cpf.message}</p>}
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"E-mail"}
                type={"email"}
                id={"email"}
                placeholder={"Insira seu e-mail"}
                register={register("email")}
              />
              {errors.email && <p className="errors">{errors.email.message}</p>}
            </FormColumn>
            <FormColumn>
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
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"Confirme sua Senha"}
                type={"password"}
                id={"confirmPassword"}
                placeholder={"Confirme sua senha"}
                register={register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="errors">{errors.confirmPassword.message}</p>
              )}
            </FormColumn>

            <CenteredButton>
              <ButtonBlue
                type="submit"
                width={"100%"}
                height={"55px"}
                top={"20px"}
              >
                Cadastrar
              </ButtonBlue>
            </CenteredButton>
          </form>

          <nav>
            <p>Já tem uma conta?</p>{" "}
            <span>
              <Link to={"/"}>Login</Link>
            </span>
          </nav>
        </section>
      </MainContent>
    </>
  );
};

export default Register;
