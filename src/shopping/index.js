import React from "react";
import {
  Container,
  LeftBlock,
  RightBlock,
  HeaderLogo,
  Title,
  Sneaker,
  NoContent,
  ImageBox,
  PhotoSneaker,
  Name,
  Subtitle,
  Footer,
  Price,
  AddCart,
  CartItems,
  CartItem,
  InfoSneaker,
  PhotoCart,
} from "./styled";
import Spinner from "../spinner";

const Shopping = () => {
  const items = [
    {
      bg: "#e1e7ed",
      sneaker: "airZoom.png",
      name: "Nike Air Zoom Pegasus 36",
      subtitle:
        "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
      price: "108.97",
      button: "ADD TO CART",
    },
    {
      bg: "#4d317f",
      sneaker: "pegasus.png",
      name: "Nike Air Zoom Pegasus 36 Shield",
      subtitle:
        "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
      price: "89.97",
      button: "ADD TO CART",
    },
    {
      bg: "#e8d026",
      sneaker: "cruzrone.png",
      name: "Nike CruzrOne",
      subtitle:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "100.97",
      button: "ADD TO CART",
    },
    {
      bg: "#fd584a",
      sneaker: "epicReact.png",
      name: "Nike Epic React Flyknit 2",
      subtitle:
        "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
      price: "89.97",
      button: "ADD TO CART",
    },
    {
      bg: "#d4d7d6",
      sneaker: "odyssey.png",
      name: "Nike Odyssey React Flyknit 2",
      subtitle:
        "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
      price: "71.97",
      button: "ADD TO CART",
    },
    {
      bg: "#f2f5f4",
      sneaker: "infinity.png",
      name: "Nike React Infinity Run Flyknit",
      subtitle:
        "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
      price: "160",
      button: "ADD TO CART",
    },
    {
      bg: "#22afdc",
      sneaker: "miler.png",
      name: "Nike React Miler",
      subtitle:
        "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
      price: "130",
      button: "ADD TO CART",
    },
    {
      bg: "#b50320",
      sneaker: "renew.png",
      name: "Nike Renew Ride",
      subtitle:
        "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
      price: "60.97",
      button: "ADD TO CART",
    },
    {
      bg: "#3569a1",
      sneaker: "vaporfly.png",
      name: "Nike Vaporfly 4% Flyknit",
      subtitle:
        "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
      price: "187.97",
      button: "ADD TO CART",
    },
    {
      bg: "#54d4c9",
      sneaker: "zoom.png",
      name: "Nike Zoom Fly 3 Premium",
      subtitle:
        "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
      price: "160",
      button: "ADD TO CART",
    },
  ];

  return (
    <Container>
      <LeftBlock>
        <HeaderLogo />
        <Title>Picked items</Title>
        {items.map((item) => {
          return <Item {...item} key={item.name}/>;
        })}
      </LeftBlock>
      <RightBlock>
        <HeaderLogo />
        <Title>Your cart</Title>
        <NoContent>
          <p>Your cart is empty.</p>
        </NoContent>
        <CartItems>
          <CartItem>
            <PhotoCart>
              <img src={`/upload/airZoom.png`} alt={"Nike"}/>
            </PhotoCart>
            <InfoSneaker>
              <Name className={"Cart"}>Nike Air Zoom Pegasus 36</Name>
              <Spinner />
            </InfoSneaker>
          </CartItem>
        </CartItems>
      </RightBlock>
    </Container>
  );
};

const Item = (props) => {
  const { bg, sneaker, name, subtitle, price, button } = props;
  return (
    <Sneaker>
      <ImageBox bg={bg}>
        <PhotoSneaker>
          <img src={`/upload/${sneaker}`} alt={"Nike"}/>
        </PhotoSneaker>
      </ImageBox>
      <Name>{name}</Name>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>
        <Price>${price}</Price>
        <AddCart>{button}</AddCart>
      </Footer>
    </Sneaker>
  );
};

export default Shopping;
