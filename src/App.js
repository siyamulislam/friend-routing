import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/'     element={<Home />} />
          <Route path='/home'       element={<Home />} />
          <Route path='/friend/:fid' element={<FriendsDetails />} />
          <Route path='*'           element={<NotFound />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
