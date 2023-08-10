import styled, { css } from "styled-components";

export const TextWrap = styled.li`
  list-style-type: none;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    color: #b672ff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "StratosSkyeng";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 120% */
    text-decoration-line: underline;
  }
`;
export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  gap: 10px;
`;
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
const activeMixin = css`
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
`;

export const FilterButton = styled.ul`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background-color: #181818;
  color: white;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  ${(props) => (props.$active === "active" ? activeMixin : "")}
`;
export const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  padding-left: 34px;
  padding-right: 34px;
`;
export const FilterRadio = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 34px;
  position: absolute;
  z-index: 1;
  border-radius: 12px;
  background: #313131;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
export const Label = styled.label`
display: inline-block;
cursor: pointer;
position: relative;
padding-left: 25px;
user-select: none;
&:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  width: 18px;
  height: 18px;
  background: rgb(49, 49, 49);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 20px;
`;
export const FilterRadioButton = styled.input`
  display: none;
  &:checked + label:before {
    background: rgba(255, 255, 255, 1);
  }
`;
