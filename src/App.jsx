import { useState } from "react";
import * as S from "./components/Main/App.style";
import { Login } from "./pages/login";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "token" });
  const handleLogOut = () => setUser(null);
  getPlaylist();
  return (
    <body>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <Login
            user={user}
            onAuthButtonClick={user ? handleLogOut : handleLogin}
          />
          <AppRoutes user={user} />
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
