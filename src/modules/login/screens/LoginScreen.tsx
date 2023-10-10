import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        alert(`
            ${username},
            ${password}
        `)
    }

    return (<ContainerLoginScreen>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="./logo.png" />
                <TitleLogin level={2} type="secondary">Login</TitleLogin>
                <Input title="Usuário" margin="32px 0 0 0" onChange={handleUsername}/>
                <Input type="password" title="Senha" margin="32px 0 0 0" onChange={handlePassword} />
                <Button type="primary" margin="64px 0 16px 0" onClick={handleLogin}>ENTRAR</Button>
            </LimitedContainer>

        </ContainerLogin>
    </ContainerLoginScreen>);
};

export default LoginScreen;