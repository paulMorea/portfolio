import Header from './layout/Header';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <h1>Hello World!</h1>
      <Footer />
    </div>
  );
}

export default App;
