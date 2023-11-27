import './App.css';
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import HoverMenu from './components/hoverMenu'
import Footer from './components/footer'
import Scheduling from './components/scheduling'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Welcome />
      <About />
      <Services />
      <Scheduling />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
