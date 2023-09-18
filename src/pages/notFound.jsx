import * as S from "./notFound.style";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <S.notFound>
      <S.notFoundCode>404</S.notFoundCode>
      <S.notFoundTextWrap>
        <S.notFoundText>Страница не найдена</S.notFoundText>
        <S.notFoundImg src="../img/crying.png" alt="logo" />
      </S.notFoundTextWrap>
      <S.notFoundDescription>
        Возможно, она была удалена или перенесена на другой адрес
      </S.notFoundDescription>
      <Link to="/">
        <S.notFoundButton>Вернуться на главную</S.notFoundButton>
      </Link>
    </S.notFound>
  );
};
