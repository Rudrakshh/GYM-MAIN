import './index.css';
import Navbar from "./components/navbar";
import Header from './components/header';
import Features from './components/features';
import Offer from './components/offer';
import About from './components/about';
import Contact from './components/contact';
import Box from './components/boxes';
import Excersizes from './components/excersize'
import Fixedbtn from './components/fixedbutton'


function App() {
  return (
    <div className="App">
      <Fixedbtn/>
      <Navbar/>
      <Header/>
      <Features/>
      <Offer/>
      <Box/>
      <About/>
      <Excersizes/>c
      <Contact/>
      
    </div>
  );
}

export default App;
