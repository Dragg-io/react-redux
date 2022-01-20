import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { autoLogin, login } from '../../store/modules/login';

import styles from './Form.module.css';

export default function Form() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  const { data, loading } = useSelector((state) => state.login.user);

  return (
    <div className={styles.container}>
      <form className={styles.container__form} onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
          placeholder="Usuário"
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
