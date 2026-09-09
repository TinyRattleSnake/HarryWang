import { Navbar } from './components';
import { About, Footer, Header, Skills, Work } from './container';
import './App.scss';

const App = () => (
  <div className="app">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <Header />
      <Work />
      <About />
      <Skills />
    </main>
    <Footer />
  </div>
);

export default App;
