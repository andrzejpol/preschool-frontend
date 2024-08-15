import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import styled from "styled-components";
import Logo from "../Logo";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const LeftSide = styled.div`
  width: 50%;
  text-align: center;
  align-items: center;

  & img {
    width: 50%;
    height: auto;
    border-radius: 50%;
  }
  
  & h1 {
    font-size: 60px;
    color: #000510;
    padding: 20px 0;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: auto;

  & h2 {
    text-align: center;
    color: #000510;
    font-size: 45px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  width: 300px;
  height: auto;
  margin: auto;
`;

const Input = styled.div`
  width: 100%;
  margin-top: 25px;
  height: 50px;
  padding: 10px 20px;
  background-color: #dedde4;
  display: flex;
  gap: 10px;
  align-items: center;
  
  & svg {
    opacity: 50%;
  }
`;

const StyledInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 70%;
  line-height: 30px;
  font-size: 15px;
`;

const StyledInputSubmit = styled.input`
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background-color: #535bf2;
  }
`;

const StyledText = styled.p`
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  margin: 10px 0;
`;

const SocialWrapper = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
`;

const StyledH6 = styled.h6`
  text-align: center;
  margin: 60px 0;
  font-size: 18px;
  font-weight: normal;
`;

const StyledSpan = styled.span`
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;
`;


const Login = () => {

  return(
    <FormWrapper>
      <LeftSide>
        <Logo/>
        <h2>Welcome back</h2>
      </LeftSide>
      <RightSide>
        <h2>LOGIN</h2>
        <InputContainer>
          <Input>
            <PersonIcon />
            <StyledInput type="text" placeholder="Username"/>
          </Input>
          <Input>
            <LockIcon />
            <StyledInput type="password" placeholder="Password"/>
          </Input>
          <StyledInputSubmit type="submit" className="login" value="LOGIN"/>
          <StyledText>Or login using</StyledText>
          <SocialWrapper className="social-items">
            <a href="#"><GoogleIcon/></a>
          </SocialWrapper>
          <StyledH6>Not Member Yet? <StyledSpan>Sign In</StyledSpan></StyledH6>
        </InputContainer>
      </RightSide>
    </FormWrapper>
  )
};

export default Login;