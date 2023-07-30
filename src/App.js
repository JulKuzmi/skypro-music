import "./App.css";
import { AudioPlayer } from "./components/audioPlayer";
import { Nav } from "./components/navMenu";
import { Sidebar } from "./components/sideBar";
import { TrackList } from "./components/trackList";
import { Songs } from "./components/songs/songs";

function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <TrackList />
            <Songs />
            <Sidebar />
            <AudioPlayer />
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
