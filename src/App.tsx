import './App.css';
import type { FC } from 'react';
import 'antd/dist/reset.css';
import { FlowerHeader } from './components/FlowerHeader';
import { HomePage } from './components/HomePage';
import { CollectionPage } from './components/CollectionPage';
import { Routes, Route, Link } from 'react-router-dom';


const App: FC = () => {
  return (
    <div>
      <FlowerHeader></FlowerHeader>
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
    </div>

  )
};

export default App;
