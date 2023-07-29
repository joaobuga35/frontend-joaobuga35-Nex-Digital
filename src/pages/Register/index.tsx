import { Link } from "react-router-dom";
import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import { ButtonBlue } from "../../styles/Button/buttons";
import { MainContent, FormColumn, CenteredButton } from "./styles";

const Register = () => {
  return (
    <>
      <MainContent>
        <section>
          <Logo top={"32px"} />
          <h2>Cadastro</h2>

          <form>
            <FormColumn>
              <InputMain
                label={"Nome"}
                type={"text"}
                id={"name"}
                placeholder={"Insira seu nome"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"CPF"}
                type={"cpf"}
                id={"cpf"}
                placeholder={"Insira seu CPF"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"E-mail"}
                type={"email"}
                id={"email"}
                placeholder={"Insira seu e-mail"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"Senha"}
                type={"password"}
                id={"password"}
                placeholder={"Insira sua senha"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"Confirme sua Senha"}
                type={"password"}
                id={"confirmPassword"}
                placeholder={"Confirme sua senha"}
              />
            </FormColumn>

            <CenteredButton>
              <ButtonBlue width={"100%"} height={"55px"} top={"20px"}>
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
