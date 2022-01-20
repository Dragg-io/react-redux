import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loading.module.css';

export default function Loading({ type, color }) {
  return (
    <div className={styles.loading}>
      <ReactLoading type={type} color={color} height={100} width={100} />
    </div>
  );
}
