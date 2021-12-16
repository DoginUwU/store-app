import React, { createElement } from 'react';
import {
  RiSettings4Line,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from './MenuHelper';

import {
  Container, NavContainer, Nav, Divider, NavTip,
} from './styles';

const Menu: React.FC = function () {
  const location = useLocation();

  const hasActive = (path: string): boolean => location.pathname === path;

  return (
    <Container>
      <NavContainer>
        {MENU_ITEMS.map((item) => (
          <Nav to={item.path} key={item.name} active={hasActive(item.path)}>
            {createElement(item.icon)}
            {' '}
            {item.name}
            <Divider />
            {!!item.navTip && <NavTip>{item.navTip.count}</NavTip>}
          </Nav>
        ))}
      </NavContainer>
      <Nav to="/settings" active={hasActive('/settings')}>
        <RiSettings4Line />
        {' '}
        Configurações
      </Nav>
    </Container>
  );
};

export default Menu;
