import { BarItem } from "../Bar/barItem";
import { UserContextNew } from "../../App";
// import { SkeletonItem } from "../Track/sceleton";
import { useNavigate } from "react-router-dom";
import * as S from "./sideBar.style";
import { useContext } from "react";

export function SideBar({ isLoading }) {
  const { user } = useContext(UserContextNew);
  let navigate = useNavigate();
  const avatarUser = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{user.username}</S.SideBarPersonalName>
        <S.SideBarAvatar onClick={avatarUser}></S.SideBarAvatar>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          <BarItem isLoading={isLoading} />
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  );
}
