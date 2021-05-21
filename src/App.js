import './App.css';
import { Switch, Route } from "react-router-dom"
import DogRandom from './Dogs/DogRandom'
import DogRandomNum from "./Dogs/DogRandomNum"
import NavBar from './components/NavBar'
import background from './IMG_2081.png'


function App() {
  return (
    <div className = 'App'>
        <img src={background} alt="rubio" className = 'rubio' />
      <NavBar />
      <main>
         <Switch>
           <Route exact path='/' />
           <Route exact path="/dog/random" component={DogRandom}/>
          <Route path="/dog/random/:num" component={DogRandomNum}/>
         </Switch>
      </main>

    </div>
  );
}

export default App;
