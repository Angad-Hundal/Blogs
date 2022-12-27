//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';



function App() {

  return (

    <Router>

    <div className="App">

      <Navbar></Navbar>

      <div className="content">

        {/* <Switch> 

          <Route>
            <Home> </Home>
          </Route>
        </Switch> */}


        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route path="/create" element={<Create />} />
          <Route path='/blogs/:id' element={<BlogDetails />}  />
        </Routes>
      

      </div>

    </div>
    </Router>
  );
  
}

export default App;
// we always export the component function so that it could be used in other files
