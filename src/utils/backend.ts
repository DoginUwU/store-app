import api from '../services/api';

let storeUrl = 'http://localhost:3333/store/';

const checkIfBackendIsValid = () => {
  api.get('/').then((response) => {
    const { data } = response;

    if (data.app !== 'Store v1') {
      throw new Error('Backend is not valid');
    }

    console.log(
      `${'%c[BACKEND] Backend is valid!'
            + '\n Version: '}${
        data.version
      }\n Created by: ${
        data.createdBy}`,
      'color: #fff; background: #0064fe; width: 100%;',
    );
    storeUrl = data.storeUrl;
  });
};

const getStoreUrl = () => storeUrl;

export { getStoreUrl, checkIfBackendIsValid };
