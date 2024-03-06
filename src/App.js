
import './App.css';
import BookDetails from './BookDetails';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 <BookList/>
 <BookDetails/>
 <BookForm/>
      </header>
    </div>
  );
}

export default App;
