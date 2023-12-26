import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextForm';

function App() {
  return (
    <div>     
      <Navbar title={"Home"}/>
      <div className="container my-3">        
        {/* <TextFrom heading="Enter your text here"/> */}
        <About/>
      </div>
    </div>

  );
}

export default App;
