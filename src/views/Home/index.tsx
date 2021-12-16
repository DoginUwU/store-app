import React, { useEffect } from 'react';
import Button from '../../components/Button';
import FeaturedApp from '../../components/FeaturedApp';
import { useApps } from '../../hooks/useApps';

import {
  Container, Downloads, Items, Item,
} from './styles';

const Home: React.FC = function () {
  const { getApplications, applications } = useApps();

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Container>
      <FeaturedApp />
      <Downloads>
        <h2>Todos aplicativos</h2>
        <Items>
          {applications.map((app) => (
            <Item to={`/application/${app._id}`} key={app._id}>
              <img src={app.icon} alt={app.name} />
              <div className="content">
                <strong>{app.name}</strong>
                {app.name}
              </div>
              <div className="download">
                <Button>Baixar</Button>
              </div>
            </Item>
          ))}
        </Items>
      </Downloads>
    </Container>
  );
};

export default Home;
