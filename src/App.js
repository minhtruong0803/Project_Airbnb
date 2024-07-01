import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Rentals from './components/Rentals';

function App() {
  return (
    <div>
      <Navbar />
      <Filter />
      <Rentals />
    </div>
  );
}

export default App;
