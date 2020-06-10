import React, {useState} from 'react';
import lightisoff from './lightisoff.png';
import lightison from './lightison.jpg';
import './App.css';

function App() {
  
  const [isLit, setLit] = useState(true)
  const [count, setCount] = useState(22)
  

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)

  }
 
  function clicked() {
    
    { isLit ? console.log('Light is on') : console.log('Light is Off')  };
  }

return (
<div>
    <div className={`box ${isLit ? 'dayLight' : ''}`}>
        <h5>Light Status = {isLit ? 'Light is on' : 'Light is Off'} </h5>
        <h5>{isLit ? <img src={lightison} height='40'/> : <img src={lightisoff} height='40'/>} </h5>
        <button onClick={ () => setLit(true) }> ON</button>
        <span> </span>
        <button onClick={() => setLit(false)}>OFF</button>
    </div>
        <br></br>
        <button onClick={decrementCount}> - </button>
        <span> {count} °C </span>
        <button onClick={incrementCount}> + </button>
        <br></br>
        <button onClick={() => setCount(22)}>  </button>
        <span> Click to reset temp to default </span>
</div>
  )
}
export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


