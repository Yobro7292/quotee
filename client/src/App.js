import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import Quote from './features/quote/Quote';


function App() {
  return (
    <div>
      <header>
        <Quote/>
      </header>
    </div>
  );
}

export default App;
