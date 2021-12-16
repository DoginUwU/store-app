import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1em;
  color: #fff;

  padding: 2em;
  overflow: hidden;
  cursor: pointer;

  * {
    transition: all 0.2s;
  }

  &:hover {
    div {
      transform: scale(1.05);
    }
`;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(http://cdn.shopify.com/s/files/1/0264/6776/2231/products/gtafranklin_1200x1200.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  filter: blur(0.2em) brightness(0.8);
`;

const InfoContainer = styled.div`
    z-index: 10;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1em;

    p {
        font-size: 0.8em;
        font-weight: 100;
    }
`;

const Logo = styled.img`
    width: 4em;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
`;

export {
  Container, Background, InfoContainer, Logo, Title,
};
