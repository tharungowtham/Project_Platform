import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Upload from './components/Upload';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/main' element={<Main/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='upload' element={<Upload/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
