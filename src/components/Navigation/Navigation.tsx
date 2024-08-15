import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import AccountMenu from "../AccountMenu";

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const OutletWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = () => (
  <Wrapper>
    <NavigationWrapper>
      <Logo/>
      <AccountMenu />
    </NavigationWrapper>
    <OutletWrapper>
      <Outlet/>
    </OutletWrapper>
  </Wrapper>
);

export default Navigation;