//import logo from './logo.svg';
//import './App.css';
import Users from "./Users.js";

import {
  BrowserRouter as R,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () =>{
  return(
    <h1>Hello World!</h1>
  )
}

function App() {
  return (
    <R>
    <div className="App">
      <Link to="/" style={{padding: 10}}>Home</Link>
      <Link to="/users/1" style={{padding: 10}}>User 1</Link>
      <Link to="/users/2" style={{padding: 10}}>User 2</Link>
      <Link to="/users/3" style={{padding: 10}}>User 3</Link>
      <Link to="/users/4" style={{padding: 10}}>User 4</Link>

      
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:uid" element={<Users />} />
    </Routes>
    </R>
  );
}

export default App;
