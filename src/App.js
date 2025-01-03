// import './App.css';
import { Root } from './pages/root/Root';
import { Route, createRoutesFromElements,createBrowserRouter, RouterProvider } from 'react-router-dom';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {News} from './pages/News'
import {Prediction} from './pages/Prediction'
import {Livescore} from './pages/Livescore'
import Login from '../src/pages/Login'


function App() {
  const queryClient = new QueryClient()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
          <Route index element={<News />}/>
          <Route path='/prediction' element={<Prediction/>}/>
          <Route path='/livescore' element={<Livescore/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
    )
  )
  return (
    <QueryClientProvider client={queryClient}>
      <div className="m-0 p-0 font-sans w-full h-[100%]">
        <RouterProvider router={router}/> 
      </div>
    </QueryClientProvider>
  );
}

export default App;
