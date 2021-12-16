import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavProps = {
    active?: boolean;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #0064fe;
  padding: 2em 1em;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  gap: 0.8em;
`;

const Nav = styled(Link)<NavProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 0.8em 0.6em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9em;
  background: ${(props) => (props.active ? '#035ae1' : 'transparent')};
  color: #fff;
  text-decoration: none;

  svg {
    margin-right: 0.5em;
  }

  &:hover {
    background: #035ae1;
  }
`;

const Divider = styled.div`
    width: 1em;
    height: 1em;
`;

const NavTip = styled.span`
  font-size: 0.8em;
  color: #fff;
  padding: 0.2em 1em;
  border-radius: 1em;
  background: #ffb000;
  margin-left: auto;
`;

export {
  Container, NavContainer, Nav, Divider, NavTip,
};
