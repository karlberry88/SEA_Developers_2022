import './App.css';
import ArrowFunctionComponent from './ArrowFunctionComponent';
import SimpleFunctionComponent from './SimpleFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <u> <h2>KARLS PAGE !!!</h2></u>
        <p>
          Karl Was Here.
        </p> 
        <ArrowFunctionComponent />        
      </header>
      <SimpleFunctionComponent />
      <ArrowFunctionComponent />    
    </div>
  );
}

export default App;
