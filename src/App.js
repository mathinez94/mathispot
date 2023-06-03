import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Navbar from './copmponents/navbar/Navbar';
import Home from './pages/home/Home';
import Stories from './pages/stories/Stories';
import Predictions from './pages/predictions/Predictions';
import Livescore from './pages/livescore/Livescore';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './copmponents/footer/Footer';

function App() {
  const client = new QueryClient();

  return (
   
    <div className="App"> 
     <QueryClientProvider client={client}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/stories' element={<Stories />}/>
          <Route path='/predictions' element={<Predictions />}/>
          <Route path='/livescore' element={<Livescore />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
        </QueryClientProvider> 
    </div>
  );
}

export default App;
