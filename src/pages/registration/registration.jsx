import React from "react";
import * as S from "../../components/Main/App.style";
import { LoginPage } from "../../components/PageLogin/loginPage";

export const Registration = () => {
  return (
    <S.Wrapper>
      <LoginPage isLoginMode={false} />
    </S.Wrapper>
  );
};
