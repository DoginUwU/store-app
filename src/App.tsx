import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import { AppProvider } from './hooks/useApps';
import { DownloadProvider } from './hooks/useDownload';
import Router from './routes/Router';
import GlobalStyle from './styles/globalStyles';
import { checkIfBackendIsValid } from './utils/backend';

const App = function () {
  useEffect(() => {
    checkIfBackendIsValid();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <DownloadProvider>
            <Router />
            <GlobalStyle />
            <Menu />
          </DownloadProvider>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
