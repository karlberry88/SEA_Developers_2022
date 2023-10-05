import './App.css';
import ArrowFunctionComponent from './ArrowFunctionComponent';
import ArrowFunctionDeStructured from './ArrowFunctionDeStructured';
import MyClassComponent from './MyClassComponent';
import SimpleFunctionComponent from './SimpleFunctionComponent';


function App() {
  return (

    
    <div className="App">
      <header className="App-header">
       <u> <h2>KARLS PAGE !!!</h2></u>
        <p>
          Karl Was Here
        </p> 
        <p>Another para</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <ArrowFunctionComponent firstname='Bill' />
        <ArrowFunctionDeStructured hobby='Yoga' colour='grey' />       
      </header>
      <SimpleFunctionComponent />
      <ArrowFunctionComponent firstname ='bob' />    
      <MyClassComponent />
    </div>
  );
}

export default App;
