import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;
export const SpinnerButton = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #eee;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  user-select: none;
  cursor: pointer;
`;
export const SpinnerValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 0 20px;
  text-align: center;
`;
