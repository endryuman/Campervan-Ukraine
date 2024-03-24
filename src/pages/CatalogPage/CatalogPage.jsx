import css from './CatalogPage.module.css';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Catalog } from 'components/Catalog/Catalog';

export const CatalogPage = () => {
  return (
    <div className={css.catalogpage}>
      <Sidebar></Sidebar>
      <Catalog></Catalog>
    </div>
  );
};
