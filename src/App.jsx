import { useState, useEffect, useContext } from "react";
import * as S from "./components/Main/App.style";
import { AppRoutes } from "./routes";
import { getPlaylist } from "./components/api";
import { createContext } from "react";

export const UserContext = createContext("");
export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [tracks, setPosts] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackTime, setTrackTime] = useState({});
  useEffect(() => {
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
          <AppRoutes
            user={user}
            setUser={setUser}
            isLoading={isLoading}
            tracks={tracks}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            trackTime={trackTime}
            setTrackTime={setTrackTime}
          />
          <footer></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
export default App;
