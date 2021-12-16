import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 2em;
`;

const Downloads = styled.div`
  margin-top: 2em;

  h2 {
    color: #31375c;
    font-size: 1.45em;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 2em;
  flex-wrap: wrap;
  margin-top: 1em;
  padding: 1em;
  flex-flow: row wrap;
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex: 1 0 40%;
  width: 100%;
  position: relative;
  text-decoration: none;
  color: #31375c;

  img {
    width: 40px;
    height: 40px;
    border-radius: 15px;
    object-fit: cover;
  }

  .content {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 0.8em;
    font-weight: 100;

    strong {
      font-size: 1.2em;
    }
  }

  .download {
      margin-left: auto;
  }
`;

export {
  Container, Downloads, Items, Item,
};
