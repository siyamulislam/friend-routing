import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
      <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      </div>


  );
}

export default App;
