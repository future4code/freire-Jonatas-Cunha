import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ResultsPage from '../pages/ResultsPage/ResultsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResultsPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;