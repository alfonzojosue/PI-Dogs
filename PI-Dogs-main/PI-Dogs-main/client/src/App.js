import './App.css';
import Inicie from './View/Inicie/Inicie.jsx';
import { Route } from "react-router-dom";
import Home from './View/Home/Home';
import ViewForm from './View/Form/ViewForm';
import DogDetail from './View/DogDetail/DogDetail';
import ContainerAbout from './container/About/ContainerAbout';



function App() {
  return (
    <div className="App">
     
     <Route exact path='/'
     component={Inicie}/>
    <Route exact path='/home'
     component={Home}/>
     <Route exact path='/form'
     component={ViewForm}/>
     <Route
     exact path="/dogs/:id"
     component={DogDetail}/>
     <Route
     exact path="/about"
     component={ContainerAbout}/>
  
    </div>
  );
}

export default App;
