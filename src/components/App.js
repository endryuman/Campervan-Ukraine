import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
