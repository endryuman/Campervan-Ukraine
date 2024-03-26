import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritesPage } from 'pages/FavoritesPage/CatalogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
