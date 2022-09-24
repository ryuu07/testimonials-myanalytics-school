import logo from './logo.svg';
import './App.css';
import Reviews from './Testimonials'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container mx-auto p-10 pb-0 pt-0">
          <div className="text-center pb-0 bottom-0">
          <h1 className="text-3xl font-sans font-bold">Testimonials</h1>
          <span className="inline-flex h-1 w-40 rounded bg-indigo-400 mt-2"></span>
          <Reviews/>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
