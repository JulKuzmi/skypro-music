import { getPlaylist } from "./components/api";
import { useDispatch } from "react-redux";
import { setNewTracks } from "./store/slices/reducers";
import { AudioPlayer } from "./components/AudioPlayer/audioPlayer";
import { useState, useEffect, createContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";

export const UserContextNew = createContext("");

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getPlaylist()
      .then((tracks) => {
        console.log(tracks);
        setPosts(tracks);
        dispatch(setNewTracks(tracks));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <S.Container>
        <UserContextNew.Provider value={{ user: user, setUser }}>
          <AppRoutes
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            setUser={setUser}
            currentTrack={currentTrack}
          />
          <AudioPlayer tracks={tracks} />
          <footer></footer>
        </UserContextNew.Provider>
      </S.Container>
    </S.Wrapper>
  );
}
export default App;
