import './App.css';
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Home from './routes/home';
import DogDetail from './routes/dogDetails.js'
import About from './routes/about.js'
import CreateDog from './routes/createDog';
import Landing from './routes/landing';
import Page404 from './routes/page404';

function App() {

  return (

    <BrowserRouter>  
    {/* aplica las funcionabilidades que necesitan las rutas ej redireccionamiento */}
      <Routes>
        {/* sirve para poder crear las rutas */}
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/dogs/:idRaza' element={<DogDetail/>}/>
        <Route exact path='/about'element={<About />}/>
        <Route exact path='/createDog'element={<CreateDog/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;