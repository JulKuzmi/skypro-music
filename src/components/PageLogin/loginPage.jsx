import { Link, useNavigate } from "react-router-dom";
import * as S from "./loginPage.style";
import { useEffect, useState } from "react";
import { useUserContext } from "../../App";
import { registerUser, loginUser } from "../api";

export function LoginPage({ isLoginMode = false }) {
  const { setAuthUser } = useUserContext();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    if (!email) {
      setError("Заполните пожалуйста почту 😉");
      return;
    } else if (!password) {
      setError("Пароль не введён");
      return;
    }
    setLogin(true);
    loginUser(email, password)
      .then((data) => {
        setAuthUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLogin(false);
      });
  };

  const handleRegister = async () => {
    if (!email) {
      setError("Заполните пожалуйста почту");
      return;
    } else if (!password) {
      setError("Пароль не введён");
      return;
    } else if (!repeatPassword) {
      setError("Не введён пароль повторно");
      return;
    } else if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }
    setRegister(true);
    registerUser(email, password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setRegister(false);
      });
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <a href="../">
            <S.ModalLogo>
              <img src="../img/skypro.jpg" alt="logo" />
            </S.ModalLogo>
          </a>
          {isLoginMode ? (
            <>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.ModalBtnEnter
                onClick={() => handleLogin({ email, password })}
                disabled={login}
              >
                Войти
              </S.ModalBtnEnter>
              <Link to="/registration">
                <S.ModalBtnSignup>Зарегистрироваться</S.ModalBtnSignup>
              </Link>
            </>
          ) : (
            <>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.ModalBtnEnter
                onClick={() => handleRegister}
                disabled={register}
              >
                Зарегистрироваться
              </S.ModalBtnEnter>
            </>
          )}
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  );
}
