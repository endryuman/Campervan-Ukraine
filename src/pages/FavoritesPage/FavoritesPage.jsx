import { useSelector } from 'react-redux';
import { Catalog } from 'components/Catalog/Catalog';
import { motion } from 'framer-motion';

export const FavoritesPage = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  const favorites = adverts.filter(adv => adv.favorite === 'true');

  return (
    <motion.div
      style={{ paddingTop: '30px', minHeight: '65vh' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {favorites.length > 0 ? (
        <Catalog adverts={favorites} />
      ) : (
        <h1 style={{ fontFamily: 'Lilita One' }}>
          You have no favorite items yet
        </h1>
      )}
    </motion.div>
  );
};
