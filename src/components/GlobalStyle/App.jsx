import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import * as S from "./App.style";

function App() {
  return (
    <body>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <Nav />
            <TrackList />
            <SideBar />
            <AudioPlayer />
          </S.Main>
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </body>
  );
}
export default App;
