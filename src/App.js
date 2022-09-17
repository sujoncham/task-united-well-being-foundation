import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Page404 from './components/Pages/404Page/Page404';
import About from './components/Pages/About/About';
import Appointment from './components/Pages/Appointment/Appointment';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
