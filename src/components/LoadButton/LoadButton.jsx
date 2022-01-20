import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../store/modules/photos';

import styles from './LoadButton.module.css';

export default function Photos() {
  const dispatch = useDispatch();

  const { page } = useSelector((state) => state.photos.photos);

  const handleClick = () => {
    dispatch(getPhotos(page + 1));
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      +
    </button>
  );
}
