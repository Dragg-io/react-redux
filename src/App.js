import React from 'react';
import { useSelector } from 'react-redux';
import Form from './components/Form/Form.jsx';
import Photos from './components/Photos/Photos.jsx';

import styles from './App.module.css';
import Loading from './components/Loading/Loading.jsx';

function App() {
  const { data, loading: loadingUser } = useSelector(
    (state) => state.login.user,
  );
  const { loading: loadingToken } = useSelector((state) => state.login.token);
  return (
    <main className={styles.mainApp}>
      <header className={styles.mainApp__header}>
        <h1>Mini Dogs</h1>
      </header>
      {loadingUser || loadingToken ? (
        <Loading type="cylon" color="#fff" />
      ) : data ? (
        <Photos />
      ) : (
        <Form />
      )}
    </main>
  );
}

export default App;
