//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {



  return (
    <div className="App">

      <Navbar></Navbar>

      <div className="content">
        
        <Home></Home>
      

      </div>

    </div>
  );
  
}

export default App;
// we always export the component function so that it could be used in other files
