import css from './subContent.module.css';
import sprite from '../../../images/sprite.svg';

export const Features = ({ card }) => {
  return (
    <div className={css.featuresWrap}>
      <ul className={css.equipList}>
        <li key="1" className={css.equipWrap}>
          <svg className={css.equipSvg}>
            <use href={`${sprite}#icon-adults`} />
          </svg>
          {card.adults} Adults
        </li>
        <li key="2" className={css.equipWrap}>
          <svg className={css.equipSvg}>
            <use href={`${sprite}#icon-child`} />
          </svg>
          {card.children} Children
        </li>
        <li key="3" className={css.equipWrap}>
          <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
            <use href={`${sprite}#icon-auto`} />
          </svg>
          {card.transmission}
        </li>
        <li key="4" className={css.equipWrap}>
          <svg className={css.equipSvg}>
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          {card.engine}
        </li>
        {card.details.kitchen > 0 && (
          <li key="5" className={css.equipWrap}>
            <svg style={{ fill: 'transparent' }} className={css.equipSvg}>
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            Kitchen
          </li>
        )}
        {card.details.bathroom > 0 && (
          <li key="6" className={css.equipWrap}>
            <svg className={css.equipSvg}>
              <use href={`${sprite}#icon-shower`} />
            </svg>
            Bathroom
          </li>
        )}
        <li key="7" className={css.equipWrap}>
          <svg className={css.equipSvg}>
            <use href={`${sprite}#icon-bedroom`} />
          </svg>
          {card.details.beds > 1
            ? `${card.details.beds} Beds`
            : ` ${card.details.beds} Bed`}
        </li>
        {card.details.airConditioner > 0 && (
          <li key="8" className={css.equipWrap}>
            <svg className={css.equipSvg}>
              <use href={`${sprite}#icon-conditioner`} />
            </svg>
            AC
          </li>
        )}
        {card.details.radio > 0 && (
          <li key="9" className={css.equipWrap}>
            <svg className={css.equipSvg}>
              <use href={`${sprite}#icon-radio`} />
            </svg>
            Radio
          </li>
        )}
        {card.details.hob > 0 && (
          <li key="10" className={css.equipWrap}>
            <svg className={css.equipSvg}>
              <use href={`${sprite}#icon-hob`} />
            </svg>
            {card.details.hob > 1 ? `${card.details.hob} Hobs` : `1 Hob`}
          </li>
        )}
        {card.details.CD > 0 && (
          <li key="11" className={css.equipWrap}>
            <svg className={css.equipSvg}>
              <use href={`${sprite}#icon-cd`} />
            </svg>
            CD
          </li>
        )}
      </ul>
    </div>
  );
};
