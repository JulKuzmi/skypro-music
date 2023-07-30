import "./App.css";
import { AudioPlayer } from "./components/audioPlayer";
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <AudioPlayer />
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    </body>
  );
}
export default App;
