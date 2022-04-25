import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  return (
      <div className="App">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
  );
}

export default App;
