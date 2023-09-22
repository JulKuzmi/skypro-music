import { useState, useEffect, createContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";
import { useDispatch } from "react-redux";
import { setNewTracks } from "./store/slices/reducers";

export const UserContextNew = createContext("");

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackTime, setTrackTime] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log();
    const fetchData = async () => {
      try {
        setUser(JSON.parse(localStorage.getItem("user")));
        const data = await getPlaylist;
        dispatch(setNewTracks(data));
      } catch (error) {
        dispatch(setNewTracks([]));
      } finally {
        dispatch(setLoading(false));
      }
    };

    void fetchData();
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <S.Container>
        <UserContextNew.Provider value={user}>
          <AppRoutes
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            trackTime={trackTime}
            setTrackTime={setTrackTime}
            setUser={setUser}
          />
          <footer></footer>
        </UserContextNew.Provider>
      </S.Container>
    </S.Wrapper>
  );
}
export default App;
