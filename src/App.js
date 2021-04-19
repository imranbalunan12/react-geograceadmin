import Dashboard from './pages/dashboard';    
import Home from './pages/home';         
import Investor from './pages/investor-relations';
import Members from './pages/members';
import Downloadables from './pages/downloadables';
import { Route, Link } from 'react-router-dom';
import './App.css'
;
  
function App() {
  return (
  
   <div className="App">
     <Route exact path="/" component={Dashboard} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/investor-relations" component={Investor} />
     <Route exact path="/members" component={Members} />
     <Route exact path="/downloadables" component={Downloadables} />
   </div>
  
  );
}

export default App;