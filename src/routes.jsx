import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import { Main } from "./components/Main/Main";
import { ProtectedRoute } from "./components/protector-route";
import { NotFound } from "./pages/notFound";
import { MyPlaylist } from "./pages/myPlaylist/myPlaylist";
// import { Collection } from "./pages/category/collection";
import { Category } from "./pages/category/category";

export const AppRoutes = ({
  isLoading,
  currentTrack,
  setCurrentTrack,
  tracks,
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
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
            />
          }
        />
        <Route
          path="/myplaylist"
          element={<MyPlaylist setCurrentTrack={setCurrentTrack} />}
        />
        <Route
          path="/item/:id"
          element={
            <Category
              isLoading={isLoading}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              tracks={tracks}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
