import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Welcome from './components/jumbotrom';
import Services from './components/cards';
import Contact from './components/footer';

function App() {
  return (
    <>
      <Navigation />
      <Welcome />
      <Services />
      <Contact />
    </>
  );
}

export default App;
