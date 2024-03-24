import css from './HomePage.module.css';
import hero from '../../images/hero.webp';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className={css.heroWrap}>
      <div>
        <h1 className={css.heroTitle}>
          <span className={css.heroLogo}>Campervan Ukraine</span> <br></br> is
          the best application <br></br>
          for renting camper vans
        </h1>
        <NavLink to="/catalog">
          <button className={css.heroBtn}>Catalog</button>
        </NavLink>
      </div>
      <img className={css.heroImg} src={hero} alt="" />
    </div>
  );
};
