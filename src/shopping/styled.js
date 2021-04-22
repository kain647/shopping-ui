import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  :before {
    display: block;
    position: fixed;
    content: "";
    width: 300%;
    height: 100%;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translateX(-50%) skewY(-8deg);
    background-color: #f6c90e;
    z-index: -1;
    animation: wave 8s ease-in-out infinite alternate;
  }
`;
export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  width: 340px;
  height: 600px;
  box-shadow: 0 3.2px 2.2px rgb(0 0 0 / 2%), 0 7px 5.4px rgb(0 0 0 / 3%),
    0 12.1px 10.1px rgb(0 0 0 / 4%), 0 19.8px 18.1px rgb(0 0 0 / 4%),
    0 34.7px 33.8px rgb(0 0 0 / 5%), 0 81px 81px rgb(0 0 0 / 7%);
  border-radius: 30px;
  overflow-y: auto;
  padding: 0 28px;
  margin-right: 40px;
  :before {
    display: flex;
    position: absolute;
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  width: 340px;
  height: 600px;
  box-shadow: 0 3.2px 2.2px rgb(0 0 0 / 2%), 0 7px 5.4px rgb(0 0 0 / 3%),
    0 12.1px 10.1px rgb(0 0 0 / 4%), 0 19.8px 18.1px rgb(0 0 0 / 4%),
    0 34.7px 33.8px rgb(0 0 0 / 5%), 0 81px 81px rgb(0 0 0 / 7%);
  border-radius: 30px;
  overflow-y: auto;
  padding: 0 28px;
  :before {
    display: flex;
    position: absolute;
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const HeaderLogo = styled.div`
  display: flex;
  position: relative;
  background-size: cover;
  background-image: url(upload/nike.png);
  width: 50px;
  height: 26px;
  margin: 10px;
  flex: 0 0 auto;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;
export const Sneaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;
export const NoContent = styled.div`
  display: flex;
  position: relative;
  p {
    font-size: 14px;
  }
`;
export const ImageBox = styled.div`
  display: flex;
  border-radius: 30px;
  height: 380px;
  width: 100%;
  align-items: center;
  overflow: hidden;
  background-color: ${({ bg }) => bg};
  z-index: 1;
`;
export const PhotoSneaker = styled.div`
  display: block;
  width: 100%;
  filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
  transform: rotate(-24deg);
  margin-left: -16px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin: 26px 0 20px;
  line-height: 1.5;
  &.Cart {
    width: 150px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 13px;
  color: #777;
  line-height: 1.8;
  margin-bottom: 20px;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const Price = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;
export const AddCart = styled.button`
  display: flex;
  height: 46px;
  background-color: #f6c90e;
  font-weight: bold;
  font-size: 14px;
  box-sizing: border-box;
  padding: 16px 20px;
  border-radius: 100px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%);
  transition: box-shadow 0.4s, background-color 0.2s;
  white-space: nowrap;
  border: none;
  align-items: center;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const InfoSneaker = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PhotoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 34px;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140%;
    transform: rotate(-30deg) translateY(-20px);
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, 0.2));
  }
`;
