import Navbar from './Navbar';
import Crossword from './Crossword';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <Crossword />
      </div>
    </div>
  );
}

export default App;
