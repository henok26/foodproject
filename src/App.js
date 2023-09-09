
import './App.css';
import Home from './Components/Home';
import Header from "./Components/Layout/Header.js"
import Footer from "./Components/Layout/Footer.js"

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='container contaner-fluid'>
      <Home/>
      <Footer/>
      </div>
    </div>
  
  );
}

export default App;
