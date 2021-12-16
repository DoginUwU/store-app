import Color from 'color';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    gap: 2em;
    padding: 1em;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${() => Color('#000').alpha(0.05).string()};
  border-radius: 0.5em;

  gap: 2em;
  padding: 1em;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 1em;
  }

  button {
      width: 100px;
  }
`;

const HeaderInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 1em;

    h1 {
        font-size: 1.5em;
    }

    p {
        font-size: 0.9em;
    }
`;

const HeaderInfoTitle = styled.div`
  width: 100%;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin-top: 1em;
  }
`;

const HeaderInfoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 2em;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    strong {
      font-size: 1.2em;
    }

    span {
      font-size: 0.9em;
    }
  }
`;

export {
  Container, Header, HeaderInfo, HeaderInfoTitle, HeaderInfoDetails,
};
