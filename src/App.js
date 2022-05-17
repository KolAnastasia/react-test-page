import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './routes/HomePage';
import WeatherPage from './routes/WeatherPage';
import TimePage from './routes/TimePage';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <> 
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/HomePage"  element={ <Homepage />} />
        <Route path="/TimePage"  element={ <TimePage/>} />
        <Route path="/WeatherPage"  element={<WeatherPage/>} />
   </Routes> 
    <Footer></Footer> 
    </>  
  );
}

export default App;
