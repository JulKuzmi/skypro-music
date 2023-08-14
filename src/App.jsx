import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";

function App() {
  return (
    <body>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes />
      </S.Wrapper>
    </body>
  );
}
export default App;
