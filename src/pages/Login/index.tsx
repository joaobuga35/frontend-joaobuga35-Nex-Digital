import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import { ButtonBlue } from "../../styles/Button/buttons";
import { DivMissingPassword, MainLogin } from "./styles";

const Login = () => {
  return (
    <>
      <MainLogin>
        <section>
          <Logo top={"110px"} bottom={"58px"} logoposition={"login"} />
          <h2>Dados de acesso</h2>

          <form>
            <InputMain
              label={"E-mail"}
              type={"email"}
              id={"email"}
              placeholder={"Insira seu e-mail"}
            />
            <InputMain
              label={"Senha"}
              type={"password"}
              id={"password"}
              placeholder={"Insira sua senha"}
            />
            <DivMissingPassword>
              <span>Esqueceu a senha?</span>
              <ButtonBlue width={"100%"} height={"40px"} top={"45px"}>
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
