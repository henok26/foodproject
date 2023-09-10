
import './App.css';
import Home from './Components/Home';
import Header from "./Components/Layout/Header.js"
import Footer from "./Components/Layout/Footer.js"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
 <div className='App'>
      <Header/>
      <div className='container contaner-fluid'>
        <Routes>
        <Route path='/' element={<Home/> } exact/>
        </Routes>
   
      <Footer/>
      </div>
    </div>

    </Router>

   
  
  );
}

export default App;

