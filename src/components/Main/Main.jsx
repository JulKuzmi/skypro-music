import { Nav } from "../NavMenu/navMenu";
import { SideBar } from "../SideBar/sideBar";
import { TrackList } from "../TrackList/trackList";
import { AudioPlayer } from "../AudioPlayer/audioPlayer";
import * as S from "./App.style";

export const Main = ({
  isLoading,
  tracks,
  setCurrentTrack,
  currentTrack,
  trackTime,
  setTrackTime,
}) => {
  return (
    <S.Main>
      <Nav />
      <TrackList
        isLoading={isLoading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
      <SideBar isLoading={isLoading} tracks={tracks} />
      <AudioPlayer
        currentTrack={currentTrack}
        trackTime={trackTime}
        setTrackTime={setTrackTime}
      />
    </S.Main>
  );
};
