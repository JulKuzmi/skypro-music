import React from "react";
import * as S from "../../components/Main/App.style";
import { LoginPage } from "../../components/PageLogin/loginPage";

export const Login = () => {
  return (
    <S.Wrapper>
      <LoginPage isLoginMode={true} />
    </S.Wrapper>
  );
};
