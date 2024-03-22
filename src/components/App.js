import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './Spinner/Spinner';
import { HomePage } from '../pages/HomePage/HomePage';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
