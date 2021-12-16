import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Application as ApplicationType } from '../../@types/Application';
import Button from '../../components/Button';
import { useApps } from '../../hooks/useApps';
import { useDownload } from '../../hooks/useDownload';

import {
  Container,
  Header,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoDetails,
} from './styles';

const Application: React.FC = function () {
  const { id } = useParams();
  const { getApplicationById } = useApps();
  const { download, downloads, getDownloadById } = useDownload()
  const [application, setApplication] = useState<ApplicationType>();
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setApplication(getApplicationById(id));
  }, [id]);

  const handleDownload = (): void => {
    if (!application) return;

    download(application);
  };

  useEffect(() => {
    if (!id) return

    const download = getDownloadById(id);

    if (!download) return;

    setIsDownloading(download?.status === 'downloading');
  }, [downloads])

  return (
    <Container>
      <Header>
        <img src={application?.icon} alt={application?.name} />
        <HeaderInfo>
          <HeaderInfoTitle>
            <h1>{application?.name}</h1>
            <p>{application?.description}</p>
          </HeaderInfoTitle>
          <HeaderInfoDetails>
            <div>
              <strong>{application?.stars}</strong>
              <span>Estrelas</span>
            </div>
            <div>
              <strong>{application?.downloads}</strong>
              <span>Downloads</span>
            </div>
          </HeaderInfoDetails>
        </HeaderInfo>
        <Button onClick={handleDownload}>{!isDownloading ? 'Baixar' : 'Baixando'}</Button>
      </Header>
    </Container>
  );
};

export default Application;
