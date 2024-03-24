import css from './subContent.module.css';

let key = 0;

export const Reviews = ({ card }) => {
  return (
    <div className={css.featuresWrap}>
      <ul>
        {card.reviews.map(review => (
          <li key={(key += 1)}>
            <h3>{review.reviewer_name}</h3>
            <div>Rating: {review.reviewer_rating}</div>
            <div>
              Comment:
              <br /> {review.comment}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
