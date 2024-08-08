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
import { LivescoreLive } from './pages/livescore/LivescoreLive';
import { LivescoreDate } from './pages/livescore/LivescoreDate';
import { NewsPage } from './pages/stories/NewsPage';
import { NoMatch } from './pages/noMatch/NoMatch';
import { useState } from 'react';


const queryClient = new QueryClient();
function App() {
  const [ displayStats, setDisplayStats ] = useState(false)

  return (
   
     <QueryClientProvider client={queryClient}> 
          <div className="App"> 
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/stories' element={<Stories />}/>
                <Route path='/predictions' element={<Predictions />} />

                <Route path='/livescore' element={<Livescore 
                displayStats={displayStats}
                setDisplayStats={setDisplayStats}
                />}>
                  <Route path='live' element={<LivescoreLive setDisplayStats={setDisplayStats}/>}/>
                  <Route path='date' element={<LivescoreDate setDisplayStats={setDisplayStats}/>}/>
                </Route>

                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/en/native/news' element={<NewsPage />}/>
                <Route path='*' element={<NoMatch />}/>
              </Routes>
              <Footer />
          </div>
        </QueryClientProvider> 
  );
}

export default App;
