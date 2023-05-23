import './App.scss';
import Home from './home';
import Detect from './detect';
import Contact from './contact';
import Help from './help';

function App() {
  return (
    <div className="App" id='app'>
      <div className='home'>      <Home />
      </div>
      <div className='detect'>      <Detect />
      </div>
      <div className='help'>
        <Help />
      </div>
      <div className='contact'>      <Contact />
      </div>
    </div>

  );
}






export default App;
