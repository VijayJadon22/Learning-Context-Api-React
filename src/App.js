import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item name="Mac-Book Pro" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      <Cart />
    </div>
  );
}

export default App;
