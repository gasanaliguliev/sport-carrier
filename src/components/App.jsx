import {Routes, Route} from 'react-router-dom'
import { GlobalStyle } from 'shared/styles/Globalstyles.styled';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';


const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
