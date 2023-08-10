import "./App.css";
import { Nav } from "./components/NavMenu/navMenu";
import { SideBar } from "./components/SideBar/sideBar";
import { TrackList } from "./components/TrackList/trackList";

function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <TrackList />

            <SideBar />
          </main>

          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
