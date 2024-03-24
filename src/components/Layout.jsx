import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={css.navLink}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={css.navLink}>
            Favorites
          </NavLink>
        </ul>
      </nav>
      <main className={css.main}>
        <Suspense fallback={<div>Loading.....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
