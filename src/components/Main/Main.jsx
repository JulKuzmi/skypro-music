import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import * as S from "./App.style";

export const Main = ({ isLoading, tracks, setCurrentTrack, currentTrack }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <TrackList
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
          />
          <SideBar />
          <AudioPlayer currentTrack={currentTrack} />
        </S.Main>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
};
