import Navbar from './components/Navigations/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Navigations/Footer';
import Contact from './pages/Contact';
import { ChakraProvider } from '@chakra-ui/react'
import {} from 'framer-motion'

function App() {
  return (
    <ChakraProvider>
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

      </Router>
    </ChakraProvider>

  );
}

export default App;
