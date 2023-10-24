import { Nav } from "../../components/NavMenu/navMenu";
import * as S from "../../components/Main/App.style";
import { Collection } from "./collection";
export const Category = ({ setCurrentTrack }) => {
  return (
    <S.Main>
      <Nav />
      <Collection setCurrentTrack={setCurrentTrack} />
    </S.Main>
  );
};
