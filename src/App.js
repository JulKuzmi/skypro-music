import "./App.css";
import { AudioPlayer } from "./components/audioPlayer";
import { Nav } from "./components/navMenu";
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav />
            <AudioPlayer />
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
