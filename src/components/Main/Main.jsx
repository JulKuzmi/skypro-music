import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
// import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import * as S from "./App.style";

export const Main = ({ isLoading, setCurrentTrack, tracks }) => {
  return (
    <S.Main>
      <Nav />
      <TrackList
        isLoading={isLoading}
        setCurrentTrack={setCurrentTrack}
        tracks={tracks}
      />
      <SideBar isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
    </S.Main>
  );
};
