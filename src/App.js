//logo spin image
import logo from './logo.svg';
//Image
import main_img from './feature_imge.jpg';
//Data List
import CookieList from "./CookieList";
//style 
import './App.css';

function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
        <h3>Cookies Shop</h3>
        <p>Where Cookie Maniacs Gather</p>
    <header className="App-header">
      <img className="main_image" src={main_img} alt="store" />
      {/* import data and display */}
      <CookieList />
    </header>
      
    <footer>Abdullah Almutairi</footer>
    
    </div>
  );
}

export default App;
