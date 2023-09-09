import Movielist from './Movielist';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import './app.css'
import AddMovie from './AddMovie';

function App() {

    return (
      <div className="App">
        <MovieProvider>    
          <Nav/>
          <AddMovie/>
          <Movielist />
        </MovieProvider>

      </div>
    );
  }

export default App;
