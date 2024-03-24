import React from 'react';
import css from './Modal.module.css';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { Features } from './subContent/Features';
import { Reviews } from './subContent/Reviews';
import { BookForm } from './subContent/BookVanForm';

export const ModalContent = ({ card }) => {
  const [subType, setSubType] = useState('features');

  const handleSubType = e => {
    if (subType === e.target.id) {
      return;
    }
    setSubType(e.target.id);
  };

  return (
    <div className={css.modalContent}>
      <div className={css.mainContetn}>
        <div className={css.modalHeaderInfo}>
          <h2>{card.name}</h2>
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
                className={css.subInfoSvg}
              >
                <use href={`${sprite}#icon-star`} />
              </svg>
              {`${card.rating} (${card.reviews.length} Reviews)`}
            </span>
            <span className={css.subInfoTitle}>
              <svg className={css.subInfoSvg}>
                <use href={`${sprite}#icon-pin`} />
              </svg>
              {card.location}
            </span>
          </div>
          <span className={css.price}>€{card.price}.00</span>
        </div>
        <ul className={css.imgList}>
          {card.gallery.map(image => {
            return (
              <li>
                <img className={css.img} src={image} alt="RV"></img>
              </li>
            );
          })}
        </ul>
        <p className={css.descr}>{card.description}...</p>
      </div>
      <div className={css.subContent}>
        <div className={css.modalNav}>
          <button
            onClick={e => handleSubType(e)}
            style={
              subType === 'features'
                ? { color: '#d04c42', borderBottom: '3px solid #d04c42' }
                : {}
            }
            className={css.modalNavBtn}
            id="features"
          >
            Features
          </button>
          <button
            onClick={e => handleSubType(e)}
            style={
              subType === 'reviews'
                ? { color: '#d04c42', borderBottom: '3px solid #d04c42' }
                : {}
            }
            className={css.modalNavBtn}
            id="reviews"
          >
            Reviews
          </button>
        </div>
        <div className={css.subWrap}>
          {subType === 'features' ? (
            <Features card={card}></Features>
          ) : (
            <Reviews card={card} />
          )}
          <BookForm />
        </div>
      </div>
    </div>
  );
};
