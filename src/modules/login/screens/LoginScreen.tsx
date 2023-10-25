import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles";

import axios from "axios";
import SVGLogo from "../../../shared/icons/SVGLogo";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        const returnObject = await axios({
            method: 'post',
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password
            }
        }).then((result) => {
            alert(`Fez login! \n Email: ${email}, senha: ${password}`);

            return result.data;
        }).catch(()=>{
            alert("Usuário inválido!")
        });
        console.log("returnObject", returnObject);
        
    }

    return (<ContainerLoginScreen>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="./logo.png" />
                <SVGLogo />
                <TitleLogin level={2} type="secondary">Login</TitleLogin>
                <Input title="Usuário" margin="32px 0 0 0" onChange={handleEmail}/>
                <Input type="password" title="Senha" margin="32px 0 0 0" onChange={handlePassword} />
                <Button type="primary" margin="64px 0 16px 0" onClick={handleLogin}>ENTRAR</Button>
            </LimitedContainer>

        </ContainerLogin>
    </ContainerLoginScreen>);
};

export default LoginScreen;