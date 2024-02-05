import { Analytics } from '@vercel/analytics/*';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <Router>
      
    <div className="App">
    
      <Navbar />
      <div className="bg-white h-screen w-full justify-between flex flex-col">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/contact">
            <Contact />
            </Route>
          </Switch>
      </div>
      <Footer />
      </div>
      
    </div>
    <Analytics/>
    </Router>
  );
}

export default App;
