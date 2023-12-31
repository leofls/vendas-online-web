import { useState } from "react";

import Button from "../../../shared/components/buttons/button/Button";
import SVGLogo from "../../../shared/components/icons/SVGLogo";
import Input from "../../../shared/components/inputs/input/input";
import { useRequests } from "../../../shared/hooks/useRequests";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from "../styles/loginScreen.styles";
import { UserType } from "../types/UserType";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest<UserType>("http://localhost:8080/auth", {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input title="Usuário" margin="32px 0 0 0" onChange={handleEmail} />
          <Input
            type="password"
            title="Senha"
            margin="32px 0 0 0"
            onChange={handlePassword}
          />
          <Button
            type="primary"
            loading={loading}
            margin="64px 0 16px 0"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
