import Navbar from './components/Navigations/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Navigations/Footer';
import Contact from './pages/Contact';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import CertificateSection from './pages/CertificateSection';
import NavbarSpace from './components/Navigations/NavbarSpace';
import NotFound from './pages/NotFound'; // Import the new 404 page
import ProjectSection from './pages/ProjectSection';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <>
                <Navbar />
                <NavbarSpace />
                <Home />
                <Footer />
              </>
            </Route>
            <Route path="/about">
              <>
                <Navbar />
                <NavbarSpace />
                <About />
                <Footer />
              </>
            </Route>
            <Route path="/contact">
              <>
                <Navbar />
                <NavbarSpace />
                <Contact />
                <Footer />
              </>
            </Route>
            <Route path="/certificate">
              <>
                <Navbar />
                <NavbarSpace />
                <CertificateSection />
                <Footer />
              </>
            </Route>
            <Route path="/projects">
              <>
                <Navbar />
                <NavbarSpace />
                <ProjectSection />
                <Footer />
              </>
            </Route>
            {/* 404 Page - no Navbar or Footer */}
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
      <Analytics />
      <SpeedInsights />
    </ChakraProvider>
  );
}

export default App;
