import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (<ContainerLoginScreen>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src="./logo.svg" />

            </LimitedContainer>

        </ContainerLogin>
    </ContainerLoginScreen>);
};

export default LoginScreen;