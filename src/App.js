import './App.css';
import Login from './Login';
import FirstWeek from "./Menus/FirstWeek"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondWeek from './Menus/SecondWeek';
import ThirdWeek from "./Menus/ThirdWeek"
import FourthWeek from './Menus/FourthWeek';
import Users from './Users';
import  Order  from './Order';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/first' element={<FirstWeek/>}/>
        <Route exact path='/second' element={<SecondWeek/>}/>
        <Route exact path='/third' element={<ThirdWeek/>}/>
        <Route exact path='/fourth' element={<FourthWeek/>}/>
        <Route exact path='/users' element={<Users/>}/>
        <Route exact path='/orders' element={<Order/>}/>
      </Routes>
    </Router>
  );
}

export default App;
