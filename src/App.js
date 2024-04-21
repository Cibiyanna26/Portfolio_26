import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () =>{
  return(
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden text-white font-primary'>
        <Header/>
        <Banner/>
        <Nav/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </>
  )
}


function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
