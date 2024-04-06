import { Modal } from 'components/Modal/Modal';
import sprite from '../../images/sprite.svg';
import css from './Catalog.module.css';
import { useState } from 'react';
import { updateAdvertThunk } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const Card = ({ adv }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(adv.favorite);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleCloseModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleToggleFavorite = () => {
    const { favorite } = adv;
    isFavorite === 'false' ? setIsFavorite('true') : setIsFavorite('false');
    dispatch(
      updateAdvertThunk({
        id: `${adv._id}`,
        body: { favorite: `${favorite === 'true' ? 'false' : 'true'}` },
      })
    );
  };

  return (
    <>
      <li key={adv._id} className={css.catalogItem}>
        <div
          style={{ backgroundImage: `url(${adv.gallery[0]})` }}
          className={css.catalogImg}
          src={adv.gallery[0]}
          alt=""
        ></div>
        <div className={css.catalogInfoWrap}>
          <div className={css.mainInfo}>
            <span className={css.name}>{adv.name}</span>
            <div>
              <span className={css.price}>€{adv.price}.00</span>
              <button onClick={handleToggleFavorite} className={css.likeBtn}>
                <svg
                  style={
                    isFavorite === 'true' ? { fill: 'red', stroke: 'red' } : {}
                  }
                  className={css.subInfoSvg}
                >
                  <use href={`${sprite}#icon-heart`} />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.subInfo}>
            <span
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
              className={css.subInfoTitle}
            >
              <svg
                style={{ fill: '#FFC531', stroke: 'transparent' }}
                className={css.equipSvg}
              >
                <use href={`${sprite}#icon-star`} />
              </svg>
              {`${adv.rating} (${adv.reviews.length} Reviews)`}
            </span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${adv.location}`}
            >
              <span className={css.subInfoTitle}>
                <svg className={css.subInfoSvg}>
                  <use href={`${sprite}#icon-pin`} />
                </svg>
                {adv.location}
              </span>
            </a>
          </div>
          <p className={css.descr}>{adv.description.slice(0, 55)}...</p>
          <ul className={css.equipList}>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-adults`} />
              </svg>
              {adv.adults} Adults
            </li>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-child`} />
              </svg>
              {adv.children} Children
            </li>
            <li className={css.equipWrap}>
              <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              {adv.transmission}
            </li>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              {adv.engine}
            </li>
            {adv.details.kitchen > 0 && (
              <li className={css.equipWrap}>
                <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
                Kitchen
              </li>
            )}
            {adv.details.bathroom > 0 && (
              <li className={css.equipWrap}>
                <svg className={css.equipSvg}>
                  <use href={`${sprite}#icon-shower`} />
                </svg>
                Bathroom
              </li>
            )}
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-bedroom`} />
              </svg>
              {adv.details.beds > 1
                ? `${adv.details.beds} Beds`
                : ` ${adv.details.beds} Bed`}
            </li>
            {adv.details.airConditioner > 0 && (
              <li className={css.equipWrap}>
                <svg className={css.equipSvg}>
                  <use href={`${sprite}#icon-conditioner`} />
                </svg>
                AC
              </li>
            )}
          </ul>
          <button onClick={handleOpenModal} className={css.equipBtn}>
            Show more
          </button>
        </div>
      </li>
      {isOpen && <Modal onClose={handleCloseModal} card={adv}></Modal>}
    </>
  );
};
