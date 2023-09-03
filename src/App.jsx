import { useState, useEffect, createContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";

export const UserContextNew = createContext("");

function App() {
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackTime, setTrackTime] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getPlaylist()
      .then((tracks) => {
        console.log(tracks);
        setPosts(tracks);
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <UserContextNew.Provider value={{ user: user, setUser }}>
            <AppRoutes
              isLoading={isLoading}
              tracks={tracks}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              trackTime={trackTime}
              setTrackTime={setTrackTime}
              setUser={setUser}
            />
            <footer></footer>
          </UserContextNew.Provider>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
export default App;
