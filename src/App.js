import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';



function App() {
  return (
  
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden text-white font-primary relative '>
        <Header/>
        <Banner/>
        <Nav/>
        <About/>
        <Work/>
        <Contact/>
      </div>


  )
}

export default App;
