import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/modules/photos';
import Card from '../Card/Card';
import LoadButton from '../LoadButton/LoadButton';
import Loading from '../Loading/Loading.jsx';

import styles from './Photos.module.css';

export default function Photos() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPhotos(1));
  }, []);

  const { list, loading } = useSelector((state) => state.photos.photos);

  return (
    <>
      <div className={styles.photos}>
        {loading ? (
          <Loading type="cylon" color="#fff" />
        ) : (
          list?.map((item) => <Card key={item.id} data={item} />)
        )}
      </div>
      <LoadButton />
    </>
  );
}
