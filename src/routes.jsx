import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import { Main } from "./components/Main/Main";
import { ProtectedRoute } from "./components/protector-route";
import { NotFound } from "./pages/notFound";
import { MyPlaylist } from "./pages/myPlaylist";
import { Collection } from "./pages/collection";

export const AppRoutes = ({
  isLoading,
  tracks,
  isOpen,
  setIsOpen,
  currentTrack,
  setCurrentTrack,
  trackTime,
  setTrackTime,
}) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
        }
      >
        <Route
          path="/"
          element={
            <Main
              isLoading={isLoading}
              tracks={tracks}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              trackTime={trackTime}
              setTrackTime={setTrackTime}
            />
          }
        />
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route path="/collection/:id" element={<Collection />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
