import css from './Catalog.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAdvertsThunk } from '../../redux/operations';
import { Card } from './Card';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  const adverts = useSelector(state => state.adverts.adverts);

  return (
    <div className={css.catalogWrap}>
      <ul className={css.catalogList}>
        {adverts &&
          adverts.map(advert => {
            return <Card advert={advert} />;
          })}
      </ul>
    </div>
  );
};
