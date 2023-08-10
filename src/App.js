import "./App.css";
// import { AudioPlayer } from "./components/audioPlayer";
import { Nav } from "./components/NavMenu/navMenu";
import { SideBar } from "./components/SideBar/sideBar";
import { TrackList } from "./components/TrackList/trackList";
import { Button } from "./components/AudioPlayer/audioPlayer.style";

function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <TrackList />
            <Button />
            <SideBar />
          </main>
          {/* <AudioPlayer /> */}
          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
