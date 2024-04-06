import css from './CatalogPage.module.css';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Catalog } from 'components/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export const CatalogPage = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  const filters = useSelector(state => state.adverts.filters);
  return (
    <motion.div
      className={css.catalogpage}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Sidebar></Sidebar>
      <Catalog adverts={adverts} filters={filters}></Catalog>
    </motion.div>
  );
};
