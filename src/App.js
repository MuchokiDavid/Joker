import './App.css';
import CategoryDropdown from './Components/CategoryDropdown';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className='App container mx-auto'>
        <Header/>
        <CategoryDropdown/>
      </div>
    
  );
}

export default App;
