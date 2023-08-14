import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Main } from "./components/Main/Main";
import { ProtectedRoute } from "./components/protector-route";
import { NotFound } from "./pages/notFound";
import { MyPlaylist } from "./pages/myPlaylist";
import { Collection } from "./pages/collection";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<Main />} />
        <Route path="/myplaylist" element={<MyPlaylist />} />
        <Route path="/collection/:id" element={<Collection />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
