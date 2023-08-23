import * as S from "./registration.style";

export const Registration = () => {
  return (
    <S.registration>
      <S.registrationWrap>
        <S.registrationLogo img src="../img/logo_modal.png" alt="logo" />
        <S.registrationName type="text" placeholder="Почта" />
        <S.registrationPassword type="text" placeholder="Пароль" />
        <S.registrationRepeatPass type="text" placeholder="Повторите пароль" />
        <S.registrationRegistration>
          Зарегистрироваться
        </S.registrationRegistration>
      </S.registrationWrap>
    </S.registration>
  );
};
