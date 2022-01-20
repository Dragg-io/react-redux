import React from 'react';

import styles from './Card.module.css';

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <img src={data.src} alt={data.title} />
        <h2>{data.title}</h2>
      </div>
      <div className={styles.card__access}>
        <p>{data.acessos}</p>
      </div>
    </div>
  );
}
