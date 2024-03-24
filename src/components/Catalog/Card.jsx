import { Modal } from 'components/Modal/Modal';
import sprite from '../../images/sprite.svg';
import css from './Catalog.module.css';
import { useState } from 'react';

export const Card = ({ advert }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleCloseModal = () => {
    setIsOpen(prev => !prev);
  };

  let key = 0;

  return (
    <>
      <li key={(key += 1)} className={css.catalogItem}>
        <div
          style={{ backgroundImage: `url(${advert.gallery[0]})` }}
          className={css.catalogImg}
          src={advert.gallery[0]}
          alt=""
        ></div>
        <div className={css.catalogInfoWrap}>
          <div className={css.mainInfo}>
            <span className={css.name}>{advert.name}</span>
            <div>
              <span className={css.price}>€{advert.price}.00</span>
              <button className={css.likeBtn}>
                <svg className={css.subInfoSvg}>
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
              {`${advert.rating} (${advert.reviews.length} Reviews)`}
            </span>

            <span className={css.subInfoTitle}>
              <svg className={css.subInfoSvg}>
                <use href={`${sprite}#icon-pin`} />
              </svg>
              {advert.location}
            </span>
          </div>
          <p className={css.descr}>{advert.description.slice(0, 55)}...</p>
          <ul className={css.equipList}>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-adults`} />
              </svg>
              {advert.adults} Adults
            </li>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-child`} />
              </svg>
              {advert.children} Children
            </li>
            <li className={css.equipWrap}>
              <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
                <use href={`${sprite}#icon-auto`} />
              </svg>
              {advert.transmission}
            </li>
            <li className={css.equipWrap}>
              <svg className={css.equipSvg}>
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              {advert.engine}
            </li>
            {advert.details.kitchen > 0 && (
              <li className={css.equipWrap}>
                <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
                Kitchen
              </li>
            )}
            {advert.details.bathroom > 0 && (
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
              {advert.details.beds > 1
                ? `${advert.details.beds} Beds`
                : ` ${advert.details.beds} Bed`}
            </li>
            {advert.details.airConditioner > 0 && (
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
      {isOpen && <Modal onClose={handleCloseModal} card={advert}></Modal>}
    </>
  );
};
